const express = require("express");
const router = express.Router();

router.get("/secret", (req, res) => {
  const secretMessage = process.env.SECRET_MESSAGE || "No secret available";
  res.json({ message: secretMessage });
});

module.exports = router;
