const express = require("express");
const { registerNewAdmin } = require("../controllers/Accounts/Register");
const { loginAdmin } = require("../controllers/Accounts/Login");
const router = express.Router();

router.post("/register", registerNewAdmin);
router.post("/login", loginAdmin);

module.exports = router;
