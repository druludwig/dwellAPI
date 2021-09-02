const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model { }

Job.init({
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
    // What should be included in the scope of work
    includes: {
        type: DataTypes.TEXT
    },
    // What should NOT be included in the scope of work
    not_included: {
        type: DataTypes.TEXT
    },
    // How much money, in DOLLARS, is this expected to require
    target_cost: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

},
    { sequelize }
)

module.exports = Job