const express = require('express');

const router = express.Router();

router.post('/login', (req, res, next) => {
  res.json('ok !');
});

module.exports = router;
