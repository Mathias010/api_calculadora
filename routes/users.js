const express = require('express');
const router = express.Router();
const usersService = require("../services/users");
const checkUserAuthMiddleware = require('../middleware/checkUserAuth');

/* GET users listing. */
router.get('/', checkUserAuthMiddleware.loginRequired,  (req, res, next) => {

  usersService.getUsers()
    .then((users) => {
      res.statusCode = 200;
      res.send(users);
    })
    .catch((error) => {
      res.statusCode = 500;
      res.send(error);
    });

});

/* GET user by id */
router.get('/:id', (req, res, next) => {

  usersService.getUser(req.params.id)
    .then((user) => {
      res.statusCode = 200;
      res.send(user);
    })
    .catch((error) => {
      res.statusCode = 500;
      res.send(error);
    });


});

/* register user */
router.post('/', (req, res, next) => {

  usersService.registerUser(req.body)
    .then((user) => {
      res.statusCode = 200;
      res.send(user);
    })
    .catch((error) => {
      res.statusCode = 500;
      res.send(error);
    });

});

/* register user */
router.post('/sign_in', (req, res, next) => {

  usersService.sign_in(req.body)
    .then((user) => {
      res.statusCode = 200;
      res.send(user);
    })
    .catch((error) => {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    });

});

/* Put user */
router.put('/:id', (req, res, next) => {

  usersService.putUser(req.params.id, req.body)
    .then((user) => {
      res.statusCode = 201;
      res.send(user);
    })
    .catch((error) => {
      res.statusCode = 500;
      res.send(error);
    });

});

/* Delete user */
router.delete('/:id', (req, res, next) => {

  usersService.deleteUser(req.params.id)
    .then((user) => {
      res.statusCode = 200;
      res.send(user);
    })
    .catch((error) => {
      res.statusCode = 500;
      res.send(error);
    });

});


module.exports = router;
