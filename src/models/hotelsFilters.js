module.exports = class hotelsFilters
{
  constructor(params){

    this.destination=params.destination;
    this.maxTripStartDate=params.maxTripStartDate;
    this.minTripStartDate=params.minTripStartDate;
    this.starRatingFrom=params.starRatingFrom;
    this.starRatingTo=params.starRatingTo;
    this.GuestRatingFrom=params.GuestRatingFrom;
    this.GuestRatingTo=params.GuestRatingTo;
    this.TotalRateFrom=params.TotalRateFrom;
    this.TotalRateTo=params.TotalRateTo;
    this.lengthOfStay=params.lengthOfStay;
  }
  ValidateFilters()
  {
    var errors=new Array();
    if (this.starRatingFrom && this.starRatingTo)
    {
      if (this.starRatingFrom> this.starRatingTo)
      {
        errors.push('MIN_STAR_RATING_IS_LARGER_THAN_MAX');
      }
    }
    if (this.GuestRatingFrom && this.GuestRatingTo)
    {
      if (this.GuestRatingFrom> this.GuestRatingTo)
      {
        errors.push('MIN_GUEST_RATING_IS_LARGER_THAN_MAX');
      }
    }
    if (this.TotalRateFrom && this.TotalRateTo)
    {
      if (this.TotalRateFrom> this.TotalRateTo)
      {
        errors.push('MIN_TOTAL_RATING_IS_LARGER_THAN_MAX');
      }
    }
    var minTripDate;
    var maxTripDate;
    if (this.minTripStartDate)
    {

      if (this.minTripStartDate.match(/^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/))
      {
        minTripDate=new Date(this.minTripStartDate);

      }
      else
      {
        errors.push('MIN_TRIP_DATE_IS_INCORRECT')
      }
    }
    if (this.maxTripStartDate)
    {

      if (this.maxTripStartDate.match(/^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/))
      {
        maxTripDate=new Date(this.maxTripStartDate);

      }
      else
      {
        errors.push('MAX_TRIP_DATE_IS_INCORRECT');
      }
    }
    if (minTripDate && maxTripDate)
    {
      if (minTripDate>maxTripDate)
      {
        errors.push('MIN_TRIP_DATE_SHOULD_BE_LESS_THAN_MAX');
      }
    }


    if (errors.length>0)
      return errors;
    else
       return null;
  }
}




