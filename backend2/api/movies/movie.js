const express = require('express')
const ruta = express.Router()
const db = require('../../db/models/index.js')

/*--------------------------------------*/
/*  para grabar en BD */
ruta.get('/all', async (req, res) => {
    console.log('all invocada !')
    // le digo a la base de datos, el modelo users ejecutalo en findAll
    let rpta = await db.movie.findAll( {} )
    res.json(rpta);
  });

// Para que me ordene
ruta.get('/allOrder', async (req, res) => {
    console.log('allOrder invocada !')
    // le digo a la base de datos, el modelo users ejecutalo en findAll
    let rpta = await db.movie.findAll( {
        order: [
            ['country','ASC'],
            ['id','ASC']
        ]
    } )
    res.json(rpta);
  });

  ruta.get('/allOrderWhere', async (req, res) => {
    console.log('allOrderWhere invocada !')
    ids = req.body.ids
    // le digo a la base de datos, el modelo users ejecutalo en findAll
    let rpta = await db.movie.findAll( {
        where: {
            id: ids
        },
        order: [
            ['country','ASC'],
            ['id','ASC']
        ]
    } )
    res.json(rpta);
  });
  


module.exports = ruta