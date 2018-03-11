var express = require('express');
var ExpediaAPICaller=require('../api/ExpediaAPICaller');
var hotelsFilters=require('../models/hotelsFilters');
var router = express.Router();
var Captions = require('../Resources/Captions');

/* GET home page. */
router.get('/', function(req, res) {

  var hf =new hotelsFilters(req.query);
  var filtersValidationErrors=hf.ValidateFilters();

  if (filtersValidationErrors)
  {
    var validationMessags=Captions.GetCaptionsbyKey(filtersValidationErrors);
    res.render('index', {hotels:null, Filters:hf, errorMessage:null,validationMessage:validationMessags});
  }
  else
  {
    ExpediaAPICaller.GetHotels(hf,function(error,returnedHotels)
  {
    var errorMessage;
    if (error){
      errorMessage='Error while retrieving hotels data from expedia';
    }
    res.render('index', {hotels:returnedHotels, Filters:hf, errorMessage:errorMessage,validationMessage:null });
  });

  }


});

module.exports = router;
