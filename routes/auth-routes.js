
const express = require('express')
const router = express.Router()
let Vimeo = require('vimeo').Vimeo;
const AWS = require('aws-sdk');

// Shortfilm Upload
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

router.use(fileUpload({
    createParentPath: true
  }));
  
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(morgan('dev'));


const multer = require('multer')
 // const upload = multer({dest: '../images'})
const Service = require('../controllers/serviceController')










/** Routes start here */

// Service //

router.post('/get-service_details', Service.ServiceDetails)













/** Routes exported */
module.exports = router;