const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const home = require('./routing/home')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//set up handlebars
const handlebars = require('express-handlebars')
      .create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')
//set port
app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname+'/public'))

//routing
app.get('/', home)

app.get('/regisUser', (req,res,next)=>{
  res.render('regisUser', {
    layout: 'main',
    nama: "Alif"
  })
})


app.listen(app.get('port'), ()=> console.log('Running on port '+ app.get('port')))