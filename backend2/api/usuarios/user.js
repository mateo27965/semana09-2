/*
Este archivo es la API para los usuarios
*/
// si tengo otro archivo con las reservas, tendremos todo relacionado con las reservas

const express = require('express')
const ruta = express.Router()

// place holder for the data
const users = ['JOhn','Pepe'];

// /api/users/lee
ruta.get('/lee', (req, res) => {
    console.log('api/users invocada !')
    res.json(users);
  });

// /api/users/inserta
ruta.post('/inserta', (req, res) => {
    const user = req.body.user;
    console.log('Agregando user:::::', user);
    users.push(user);
    res.json("user agregado");
  });

module.exports = ruta
  