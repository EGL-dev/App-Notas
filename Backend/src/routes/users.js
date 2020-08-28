const {Router} = require('express');

const router=Router();

const { getUsers, createdUsers,deleteUsers, getUser  }=require('../controllers/usuarios.controllers');


router.route('/')
.get(getUsers)
.post(createdUsers)




router.route('/:id')
.delete(deleteUsers)



module.exports= router;

