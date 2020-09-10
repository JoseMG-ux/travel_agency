const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');

const Testimonial = db.define('testimoniales', {
    nombre:{
        type:Sequelize.STRING
    },
    correo:{
        type:Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    },
});

module.exports = Testimonial;