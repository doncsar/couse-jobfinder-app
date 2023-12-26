const express     = require('express')
const exphbs      = require('express-handlebars')
const app = express()
const <span
   class="placeholder col-3 placeholder-lg bg-primary"
></span>

const db          = require('./db/connection')
const bodyParser  = require('body-parser')

const PORT = 3000

app.listen(PORT, () => {
   console.log(`Express is running at port ${PORT}`)
})

//db connection
db
   .authenticate()
   .then(() => {
      console.log("Connected successfully to database");
   })
   .catch((err) => {
      console.error("Fail to connect to database", err);
   })
    
//body
   app.use(bodyParser.urlencoded({extended: false}))
 
//handlebars
   app.set('views', )

//routes
app.get('/', (req, res) => {
   res.send("Hello World!")
})

app.use('/jobs', require('./routes/jobs'))