const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) =>{
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.agregartestimonial = async (req, res) => {
    //validate
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre){
        errores.push({'mensaje' : 'Agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje' : 'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje' : 'Agrega tu mensaje'})
    }

    //check errors
     if(errores.length > 0){
         //show view with defects
         const testimoniales = await Testimonial.findAll()
         res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina:'Testimoniales',
            testimoniales
        })
     }else{
         //store in BD
         Testimonial.create({
             nombre,
             correo,
             mensaje
         })
         .then(testimonial => res.redirect('/testimoniales'))
         .catch(error => console.log(error))
     }
}