var expect  = require('chai').expect;
var ExpediaURLGenerator=require('./ExpediaURLGenerator');


describe ('Test Generate URL for Expedia' ,function(){
it('Should return base URL with there is no filters', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  var returnedURL;

  returnedURL=ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters);

  expect(returnedURL).to.equal(baseURL);
});

it('Should generate URL correctly for destination filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.destination="Amman";
  var returnedURL;
  var expectedURL= baseURL + "&destinationName=Amman";

  returnedURL=ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters);

  expect(returnedURL).to.equal(expectedURL);
});

it('Should generate URL correctly for max trip start date filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.maxTripStartDate="2018-03-12";

  var expectedURL= baseURL + "&maxTripStartDate=2018-03-12";

  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

});

it('Should generate URL correctly for minimum star rating filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.starRatingFrom=1;

  var expectedURL= baseURL + "&minStarRating=1";

  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

});


it('Should generate URL correctly for maximum star rating filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.starRatingTo=5;

  var expectedURL= baseURL + "&maxStarRating=5";

  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

});

it('Should generate URL correctly for minimum guest rating filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.GuestRatingFrom=1;

  var expectedURL= baseURL + "&minGuestRating=1";

  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

});

it('Should generate URL correctly for maximum guest rating filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.GuestRatingTo=5;

  var expectedURL= baseURL + "&maxGuestRating=5";

  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

});

it('Should generate URL correctly for minimum guest rating filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.TotalRateFrom=1;

  var expectedURL= baseURL + "&minTotalRate=1";

  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

});

it('Should generate URL correctly for maximum guest rating filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.TotalRateTo=1;

  var expectedURL= baseURL + "&maxTotalRate=1";

  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

});
it('Should generate URL correctly for length of stay filter', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.lengthOfStay=1;

  var expectedURL= baseURL + "&lengthOfStay=1";

  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

});

it('Should generate URL correctly for all filters', function() {
  var baseURL="http://www.expedia.com?scenario=deal-finder";
  var hotelfilters=new Object();
  hotelfilters.destination="Amman";
  hotelfilters.maxTripStartDate="2018-03-14";
  hotelfilters.minTripStartDate="2018-03-12";
  hotelfilters.starRatingFrom=1;
  hotelfilters.starRatingTo=2;
  hotelfilters.GuestRatingFrom=1;
  hotelfilters.GuestRatingTo=4;
  hotelfilters.TotalRateFrom=1;
  hotelfilters.TotalRateTo=100;
  hotelfilters.lengthOfStay=1;


  var expectedURL= baseURL + "&destinationName=Amman&minTripStartDate=2018-03-12&maxTripStartDate=2018-03-14&minStarRating=1&maxStarRating=2&minGuestRating=1&maxGuestRating=4&minTotalRate=1&maxTotalRate=100&lengthOfStay=1";


  expect(ExpediaURLGenerator.GenerateURLForExpedia(baseURL,hotelfilters)).to.equal(expectedURL);

  //note this function should be enhanced to check for filters without depending on the order of adding them.
});


});

