const router = require('express').Router();
const db = require('../../models');
const cors = require('cors');
router.use(cors())
let moment = require('moment');
const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/connection');

//Get a SINGLE task by ID
router.get('/:id', (req, res) => {
  db.Task.findByPk(req.params.id)
    .then(userData => {
      res.json(userData)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: "server error",
        error: err
      })
    })
});

//Get ALL tasks due in next 7 DAYS
router.get('/date-report/7', (req, res) => {
  let today = moment().format("YYYY-MM-DD")
  let in7days = moment().add(7, 'days').format("YYYY-MM-DD");
  return sequelize.query(`SELECT * FROM tasks WHERE date_due >= '${today}' AND date_due <= '${in7days}'`, { type: QueryTypes.SELECT })
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

//Get ALL tasks due in next 30 DAYS
router.get('/date-report/30', (req, res) => {
  let today = moment().format("YYYY-MM-DD")
  let in7days = moment().add(30, 'days').format("YYYY-MM-DD");
  return sequelize.query(`SELECT * FROM tasks WHERE date_due >= '${today}' AND date_due <= '${in7days}'`, { type: QueryTypes.SELECT })
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

//Get ALL tasks that require GOOD WEATHER
router.get('/date-report/weather', (req, res) => {
  return sequelize.query(`SELECT * FROM tasks WHERE req_good_weather = 1`, { type: QueryTypes.SELECT })
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

//Get ALL tasks that require GOOD WEATHER
router.get('/date-report/helpneeded', (req, res) => {
  return sequelize.query(`SELECT * FROM tasks WHERE num_people_req >= 2`, { type: QueryTypes.SELECT })
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

// Save a new Task
router.post("/", (req, res) => {
  db.Task.create({
    name: req.body.name,
    description: req.body.description,
    date_due: req.body.date_due,
    priority_high: req.body.priority_high,
    req_good_weather: req.body.req_good_weather,
    time_req: req.body.time_req,
    num_people_req: req.body.num_people_req,
    cost: req.body.cost,
    req_items: req.body.req_items,
  })
    .then(res.json('task saved'))
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "error",
        error: err
      })
    })
});

//Get all tasks
router.get('/', (req, res) => {
  db.Task.findAll()
    .then(taskData => {
      res.json(taskData)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: "server error",
        error: err
      })
    })
});

module.exports = router;
