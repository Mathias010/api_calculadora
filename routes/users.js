const express = require('express');
const router = express.Router();
const usersService = require("../services/users");

/* GET users listing. */
router.get('/', function (req, res, next) {

  usersService.getUsers()
    .then((users) => {
      res.statusCode = 200;
      res.send(users);
    })
    .catch((error)=>{
      res.statusCode = 500;
      res.send(error);
    });

});

/* GET user by id */
router.get('/:id', function (req, res, next) {

  usersService.getUser(req.params.id)
  .then((user) => {
    res.statusCode = 200;
    res.send(user);
  })
  .catch((error)=>{
    res.statusCode = 500;
    res.send(error);
  });


});

/* Post user */
router.post('/', function (req, res, next) {

  usersService.postUser(req.body)
  .then((user) => {
    res.statusCode = 200;
    res.send(user);
  })
  .catch((error)=>{
    res.statusCode = 500;
    res.send(error);
  });

});

/* Put user */
router.put('/:id', function (req, res, next) {

  usersService.putUser(req.params.id,req.body)
  .then((user) => {
    res.statusCode = 201;
    res.send(user);
  })
  .catch((error)=>{
    res.statusCode = 500;
    res.send(error);
  });

});

/* Delete user */
router.delete('/:id', function (req, res, next) {

  usersService.deleteUser(req.params.id)
  .then((user) => {
    res.statusCode = 200;
    res.send(user);
  })
  .catch((error)=>{
    res.statusCode = 500;
    res.send(error);
  });

});


module.exports = router;
