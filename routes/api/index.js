const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;
