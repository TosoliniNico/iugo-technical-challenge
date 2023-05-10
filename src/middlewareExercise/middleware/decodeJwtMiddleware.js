const jwt = require("jsonwebtoken");

function decodeJwtMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
    } catch (error) {
      console.error(error);
    }
  }
  next();
}
module.exports = decodeJwtMiddleware;
