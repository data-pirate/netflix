const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../../models/User.js");
const Session = require("../../models/session.js");
const jwt = require("jsonwebtoken");

// user registraion
router.post("/register", async (req, res) => {
  let { fullName, email, password } = req.body;
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    res.status(403).json("user with this email already exists");
  }

  password = CryptoJS.AES.encrypt(
    password,
    process.env.PASSWORD_HASHING_KEY
  ).toString();

  const newUser = new User({
    name: fullName,
    email: email,
    password: password,
  });

  let code = 200;
  let data;
  try {
    data = await newUser.save();
  } catch (err) {
    code = 500;
    data = err;
  }
  res.status(code).json(data);
});

// user login
router.post("/login", async (req, res) => {
  try {
    const formEmail = req.body.email;
    const formPassword = req.body.password;
    const user = await User.findOne({ email: formEmail });

    let code, data;

    if (!user) {
      res.status(401).json("wrong email or password");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_HASHING_KEY
    );
    const original = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (original !== formPassword) {
      res.status(401).json({ message: "wrong email or password" });
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    const { password, ...info } = user._doc;

    const update = { user_id: user._id, jwt: token };
    const session = await Session.findOneAndUpdate(
      { user_id: user._id },
      update,
      { upsert: true, new: true }
    );

    res.status(200).json({ ...info, session });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
