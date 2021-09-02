const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    res.json('hello');
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
