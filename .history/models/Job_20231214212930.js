const Sequelize = require('sequelize')
const db = require('../db/connection')

const Job = db.define('job', {
   title: {
      type: Sequelize.STRING,
   },
   description: {
      type: Sequelize.STRING,
   },
   salary: {
      type: Sequelize.STRING,
   },
   company: {
      type: Sequelize.STRING,
   },
   email: {
      type: Sequelize.STRING,
   },
   isewJob: {
      type: Sequelize.INTEGER,
   }
})

module.exports = Job