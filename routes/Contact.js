const express = require("express");
const {
   contactCLientInfo,
   getContactClientInfo,
} = require("../controllers/Contact");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.post("/info", contactCLientInfo);
router.get("/info", protect, getContactClientInfo);

module.exports = router;
