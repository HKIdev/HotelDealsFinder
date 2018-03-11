var expect  = require('chai').expect;
var ExpediaResponseParser=require('./ExpediaResponseParser');
var fs=require('fs');


describe ('Test prasing expedia response for hotels query' ,function(){
it('Should return array with no elements for empty data', function() {

  var response="";
  var HotelsArray=ExpediaResponseParser.parseHotelData(response)

  expect(HotelsArray.length).to.equal(0);

});

it('Should return array with one hotel in Amman for sample respone', function() {


  var response=fs.readFileSync(__dirname + '/OnehotelTestdata.test.json', 'utf-8');

  var HotelsArray=ExpediaResponseParser.parseHotelData(JSON.parse(response))

  expect(HotelsArray.length).to.equal(1);
  expect(HotelsArray[0].city).to.equal('Amman');

});

});
