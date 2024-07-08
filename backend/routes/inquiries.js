const express = require('express');
const router = express.Router();
const Inquiry = require('../models/inquiry');

// Create a new inquiry
router.post('/', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).send(inquiry);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get quotation based on inquiry details
router.post('/quotation', (req, res) => {
  const { items, distance } = req.body;
  // Mock implementation of quotation logic
  const cost = items * 10 + distance * 2;
  console.log(items);
  console.log(req.body)
  res.send({ cost });
});
module.exports = router;