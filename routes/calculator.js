const express = require("express");
const router = express.Router();

router.post("/addition", (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

router.post("/multiply", (req, res) => {
  const { a, b } = req.body;
  const result = a * b;
  res.json({ result });
});

router.post("/substract", (req, res) => {
  const { a, b } = req.body;
  const result = a - b;
  res.json({ result });
});

router.post("/divide", (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed" });
  }
  const result = a / b;
  res.json({ result });
});

module.exports = router;
