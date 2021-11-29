const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const header = req.headers.token;
  if (header) {
    const token = header.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
      if (err) {
        res.status(403).json("session expired,  please login again");
      }
      req.data = data;
      next();
    });
  } else {
    return res.status(401).json({ message: "not authenticated" });
  }
}

module.exports = verify;
