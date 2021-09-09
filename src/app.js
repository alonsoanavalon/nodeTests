const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {allowInsecurePrototypeAccess}= require('@handlebars/allow-prototype-access')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')

/* Variables de ruteo */

const indexRoutes = require('./routes/index')
const submodelRoutes = require('./routes/submodels')


const hbs = exphbs.create({
    handlebars: allowInsecurePrototypeAccess(Handlebars), 
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
})


// Inicializaciones
const app = express()


// Settings

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes

app.use('/', indexRoutes)
app.use('/submodels', submodelRoutes)
//Listening...

app.listen(app.get('port'), _ => {
    console.log('Conectado en puerto: ', app.get('port'))
})
