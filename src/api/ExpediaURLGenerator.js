
module.exports.GenerateURLForExpedia= function (baseUrl, hotelFilters)
{
  var URL=baseUrl
  var queryString="";
  if (hotelFilters.destination)
  {
    queryString=queryString + '&destinationName=' + hotelFilters.destination;
  }
  if (hotelFilters.minTripStartDate)
  {
    queryString=queryString + '&minTripStartDate=' + hotelFilters.minTripStartDate;
  }
  if (hotelFilters.maxTripStartDate)
  {
    queryString=queryString + '&maxTripStartDate=' + hotelFilters.maxTripStartDate;
  }
  if (hotelFilters.starRatingFrom && parseInt(hotelFilters.starRatingFrom)>0)
  {
    queryString=queryString + '&minStarRating=' + hotelFilters.starRatingFrom;
  }
  if (hotelFilters.starRatingTo && parseInt(hotelFilters.starRatingTo)>0)
  {
    queryString=queryString + '&maxStarRating=' + hotelFilters.starRatingTo;
  }
   //guest rating
   if (hotelFilters.GuestRatingFrom && parseInt(hotelFilters.GuestRatingFrom)>0)
   {
    queryString=queryString + '&minGuestRating=' + hotelFilters.GuestRatingFrom;
   }
   if (hotelFilters.GuestRatingTo && parseInt(hotelFilters.GuestRatingTo)>0)
   {
    queryString=queryString + '&maxGuestRating=' + hotelFilters.GuestRatingTo;
   }
  //total rate
  if (hotelFilters.TotalRateFrom && parseInt(hotelFilters.TotalRateFrom)>0)
  {
    queryString=queryString + '&minTotalRate=' + hotelFilters.TotalRateFrom;
  }
  if (hotelFilters.TotalRateTo && parseInt(hotelFilters.TotalRateTo)>0)
  {
    queryString=queryString + '&maxTotalRate=' + hotelFilters.TotalRateTo;
  }
  //length of stay
  if (hotelFilters.lengthOfStay && parseInt(hotelFilters.lengthOfStay)>0)
  {
    queryString=queryString + '&lengthOfStay=' + hotelFilters.lengthOfStay;
  }


  return URL + queryString;
}



