const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

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
   app.use(bodyParser.urlencoded)
 

//routes
app.get('/', (req, res) => {
   res.send("Hello World!")
})