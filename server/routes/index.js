const express = require ('express');
const route = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');


//Controllers
const nosotrosController = require('../controllers/nosotrosControllers');
const homeController = require('../controllers/homeControllers');
const viajesController = require('../controllers/viajesControllers')
const testimonialesController = require('../controllers/testimonialesControllers')

module.exports = function(){
//endpoints
    route.get('/', homeController.consultasHomePage )   
    route.get('/nosotros', nosotrosController.infoNosotros);
    route.get('/viajes', viajesController.mostrarViajes);
    route.get('/viajes/:id', viajesController.mostrarViajeID);
    route.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    //Form 
    route.post("/testimoniales", testimonialesController.agregartestimonial)

    return route;
}