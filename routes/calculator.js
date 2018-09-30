const express = require('express');
const router = express.Router();
const checkUserAuthMiddleware = require('../middleware/checkUserAuth');


/*calculator*/
router.get('/', checkUserAuthMiddleware.loginRequired, (req, res, next) => {

    res.send('sla');
  
  });

  module.exports = router