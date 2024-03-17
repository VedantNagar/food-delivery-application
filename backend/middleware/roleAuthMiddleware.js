const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
  const { token } = req.cookies;

 

 

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email, id, name, role } = decoded;
    if (role !== 'owner') {
      return res.status(404).json({
        msg: 'Not an owner',
      });
    }
    req.user = { email, id, name, role };
    next();
  } catch (error) {
    return res.status(404).json({
      error: 'invalid token',
    });
  }
};

module.exports = authenticationMiddleware;
