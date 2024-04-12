const router = require("express").Router();
const bcrypt = require("bcrypt");
const { generateTokens } = require("../../utils/authUtils");
const cookiesConfig = require("../../config/cookiesConfig");

module.exports = router;
