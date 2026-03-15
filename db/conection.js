let Sequelize = require('sequelize');
let sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./db/app.db'
});

module.exports = sequelize;

