// This file currently unused, but leaving here for possible future use
const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
  db.User.findAll()
    .then(userData => {
      res.json(userData)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Uh oh!",
        error: err
      })
    })
})


module.exports = router;
