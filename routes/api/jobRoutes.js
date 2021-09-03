const router = require('express').Router();
const db = require('../../models');
const cors = require('cors');
router.use(cors())
const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
  db.Job.findAll()
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

router.get('/:id', (req, res) => {
  db.Job.findByPk(req.params.id)
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

//Get ALL HIGH PRIORITY Jobs
router.get('/priority/high', (req, res) => {
  return sequelize.query(`SELECT * FROM jobs WHERE priority_high = "Yes"`, { type: QueryTypes.SELECT })
    .then(FilteredTasks => {
      console.log(FilteredTasks)
      res.json(FilteredTasks)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: "server error",
        error: err
      })
    })
});

// Save a new Job
router.post("/", (req, res) => {
  db.Job.create({
    name: req.body.name,
    date_due: req.body.date_due,
    priority_high: req.body.priority_high,
    includes: req.body.includes,
    not_included: req.body.not_included,
    target_cost: req.body.cost,
  })
    .then(res.json('job saved'))
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "error",
        error: err
      })
    })
});

module.exports = router;
