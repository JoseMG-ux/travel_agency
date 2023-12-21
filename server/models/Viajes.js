const { request } = require('express');

const sequelize = require('sequelize');
const db = require('../config/database');

const Viaje = db.define('viaje',{
    titulo: {
        type:sequelize.STRING
    },
    precio: {
        type: sequelize.STRING
    },
    fecha_ida: {
        type: sequelize.DATE
    },
    fecha_vuelta: {
        type: sequelize.DATE
    },
    imagen: {
        type:sequelize.STRING
    },
    descripcion: {
        type: sequelize.STRING
    },
    disponible: {
        type: sequelize.STRING
    }
});

module.exports = Viaje;

