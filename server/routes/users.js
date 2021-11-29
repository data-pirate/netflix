const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../middlewares/verifyTokens");

/**
 * AGENDA:
 * make these operations
 * GET USER
 * UPDATE USER
 *
 *
 * <================ Admin operations =================>
 * GET ALL USERS
 * GET USER STATS
 */

/**
 * update user fn
 * `accepts user id as a parameter`
 * authenicates using middleware
 */

router.put("/:id", verify, async (req, res) => {
  if (req.data.id === req.params.id || req.data.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_HASHING_KEY
      ).toString();
    }

    const { isAdmin, ...info } = req.body;

    let updatedUser = {};
    try {
      if (req.data.isAdmin) {
        updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body
          },
          { new: true }
        );
      }else{
        updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: info,
          },
          { new: true }
        );
      }

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } else {
    res.status(403).json({ message: "Not authenticated" });
  }
});

/**
 * delete user (only for admin)
 * accepts user id as parameter
 * authicates and updates the user
 */

router.delete("/:id", async (req, res) => {
  if (req.data.isAdmin) {
    try {
      const updatedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } else {
    res.status(403).json({ message: "Not authenticated, please login again" });
  }
});

/**
 * get user
 */

router.get("/find/:id", async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    if (user) {
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } else {
      res.status(404).json({ message: "user not found for the given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * all users
 */

router.get("/", async (req, res) => {
  if (req.data.isAdmin) {
    const users = req.query.new
      ? await User.find().limit(10)
      : await User.find();
  }
  try {
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * get stats
 */

router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.getFullYear() - 1;
  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
