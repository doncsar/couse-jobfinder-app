const express = require('express')
const router = express.Router()
const Job = require('../models/Job')

router.get('/test', (_, res) => {
   res.send('Successful')
})


//job
router.get('/add', (_, res) => res.render('add'))

//add job via post
router.post('/add', (req, res) => {
   let { title, salary, company, description, email, new_job } = req.body
   //insert
   Job.create({
      title,
      salary,
      company,
      description,
      email,
      new_job,
   })
      .then(() => res.redirect('/'))
      .catch((err) => console.log(err))
})

module.exports = router
