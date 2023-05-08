const express = require("express");
const router = require("express").Router();
const {
   candidateApplyJob,
   getCandidateApplyJob,
} = require("../controllers/ApplyJob");
const { protect } = require("../middleware/authMiddleware");

router.post("/apply", candidateApplyJob);
router.get("/apply", protect, getCandidateApplyJob);

module.exports = router;
