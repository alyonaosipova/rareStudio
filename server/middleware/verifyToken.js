const jwt = require("jsonwebtoken");
const { generateTokens } = require("../utils/authUtils");
const cookiesConfig = require("../config/cookiesConfig");

function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, process.env.TOKEN_R);
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, email: user.email, name: user.name },
    });
    res.locals.user = user;

    res
      .cookie(cookiesConfig.refresh, refreshToken, {
        maxAge: cookiesConfig.maxAgeRefresh,
        httpOnly: true,
      })
      .cookie(cookiesConfig.access, accessToken, {
        maxAge: cookiesConfig.maxAgeAccess,
        httpOnly: true,
      });
    next();
  } catch (error) {
    res.clearCookie(cookiesConfig.access).clearCookie(cookiesConfig.refresh);
    next();
  }
}

function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const  {user}  = jwt.verify(access, process.env.TOKEN_A);
    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

module.exports = { verifyAccessToken };
