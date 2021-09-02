const User = require("./User");
const Task = require("./Task");
const Job = require("./Job");


Job.belongsTo(User, {
});

Task.belongsTo(User, {
});


module.exports = { User, Task, Job }