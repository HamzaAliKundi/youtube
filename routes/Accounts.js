const express = require("express");
const { registerNewAdmin } = require("../controllers/Accounts/Register");
const { loginAdmin } = require("../controllers/Accounts/Login");
const { deleteAdmin } = require("../controllers/Accounts/DeleteAdmin");
const router = express.Router();

router.post("/register", registerNewAdmin);
router.post("/login", loginAdmin);
router.delete("/delete/:id", deleteAdmin);

module.exports = router;
