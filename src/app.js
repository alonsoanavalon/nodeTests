const express = require('express')
const path = require('path')
const morgan = require('morgan')
const indexRoutes = require('./routes/index')




// Inicializaciones
const app = express()


// Settings

app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes

app.use('/', indexRoutes)

//Listening...

app.listen(app.get('port'), _ => {
    console.log('Conectado en puerto: ', app.get('port'))
})
