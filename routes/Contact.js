const express = require("express");
const {
   contactCLientInfo,
   getContactClientInfo,
   getSingleClientDestail,
} = require("../controllers/Contact");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.post("/info", contactCLientInfo);
router.get("/info", protect, getContactClientInfo);
router.get("/single/detail/:id", protect, getSingleClientDestail);

module.exports = router;
