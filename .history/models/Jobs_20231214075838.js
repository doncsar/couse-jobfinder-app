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
      type: Sequelize.STRING
   }
   comp
})