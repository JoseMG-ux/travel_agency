//Import express
const express = require('express');
const routes = require('./routes')
const path = require('path');
const configs = require('./config');
const bodyparser = require('body-parser');

require('dotenv').config({ path: 'variables.env' });

//Config express
const app = express();

//Enable pug
app.set('view engine', 'pug');

//Add views
app.set('views', path.join(__dirname, './views'));

//validate if we are in development or production
const config = configs[app.get('env')];
 
//Create variable for web site
app.locals.titulo = config.nombreSitio;

//Show actual year and generate the route
app.use((req, res, next )=>{
    //Add new date
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path
    return next();
})
//execute bodyparse
app.use(bodyparser.urlencoded({extended: true}));

//Upload routes
app.use('/', routes())

//Upload a static file
app.use(express.static('public'));

//PORT AND HOST for APP
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => console.log('Servidor funcionando'))