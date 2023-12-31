const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const db = require('./db/connection')
const bodyParser = require('body-parser')
const Job = require('./models/Job')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const PORT = 3000

//handlebars instance
const hbs = exphbs.create({ defaultLayout: 'main' })

app.listen(PORT, () => {
   console.log(`Express is running at port ${PORT}`)
})

//db connection
db.authenticate()
   .then(() => {
      console.log('Connected successfully to database')
   })
   .catch((err) => {
      console.error('Fail to connect to database', err)
   })

//body
app.use(bodyParser.urlencoded({ extended: false }))

//handlebars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.get('/', (req, res) => {

   let search = req.query.job
   let query = '%' + search + '%'

   if (!search) {
      Job.findAll({
         order: [
            ['createdAt', 'DESC']
         ]
      })
         .then(jobs => {
            res.render('index', {
               jobs,
            })
         })
         .catch(err => console.log(err))
   } else {
      Job.findAll({
         where: { title: { [Op.like]: query } },
         order: [['createdAt', 'DESC']],
      })
         .then((jobs) => {
            res.render('index', {
               jobs,
               search,
            })
         })
         .catch((err) => console.log(err))
   }
})

app.use('/jobs', require('./routes/jobs'))
