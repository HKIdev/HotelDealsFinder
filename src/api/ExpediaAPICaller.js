//var http=require("http");
var request = require("request");
require('../models/hotelsFilters');
var ExpediaURLGenerator=require('./ExpediaURLGenerator');
var ExpediaResponseParser=require('./ExpediaResponseParser');


const Baseurl = "https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel";

module.exports.GetHotels= function (hf, Callback)
{
  var URL=ExpediaURLGenerator.GenerateURLForExpedia(Baseurl,hf);


    console.log(URL);
    request({
        url: URL,
        json: true
    }, function (error, response, body) {

      Callback(error, ExpediaResponseParser.parseHotelData(body));
    })
}

