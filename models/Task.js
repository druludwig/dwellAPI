const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model { }

Task.init({
    name: {
        type: DataTypes.TEXT
    },
    // What is the latest date this should be completed by
    date_due: {
        type: DataTypes.DATE
    },
    // Should this task be completed before others
    priority_high: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    // What are the steps required to complete the task
    description: {
        type: DataTypes.TEXT
    },
    // Does the task require non-rainy conditions
    req_good_weather: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    // How much time, in MINUTES, will the task require
    time_req: {
        type: DataTypes.INTEGER
    },
    // How many people are required to complete the task
    num_people_req: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    // How much money, in DOLLARS, might this task cost
    cost: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    // What items are needed to complete this task
    req_items: {
        type: DataTypes.TEXT
    },
    // Currently just an icon. This will become user defined in future version.
    image_name: {
        type: DataTypes.TEXT,
        defaultValue: "task-icon.png"
    }
},

    { sequelize }
)

module.exports = Task