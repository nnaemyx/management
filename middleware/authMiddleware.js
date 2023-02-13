const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({
      message: 'No token provided'
    });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req._id = decoded.id;
    next();
  } catch (error) {
    return res.status(401).send({
      message: 'Token is not valid'
    });
  }
})

module.exports = { protect }
