module.exports.GetCaptionsbyKey= function (CaptionKeys)
{
  //the captions should be read from resources files or DB
  //this is just a simple implemenation for getting captions
var Captions=new Array();
var text='';
if (CaptionKeys && CaptionKeys.length>0 )
{
 for (var i=0; i<CaptionKeys.length ; i++)
 {
  switch (CaptionKeys[i])
  {
    case "MIN_STAR_RATING_IS_LARGER_THAN_MAX":
        text = "Minimum Star Rating should be less Maximum Star Rating!";
        break;
    case "MIN_GUEST_RATING_IS_LARGER_THAN_MAX":
        text = "Minimum Guest Rating should be less Maximum Guest Rating!";
        break;
    case "MIN_TOTAL_RATING_IS_LARGER_THAN_MAX":
        text = "Minimum Total Rating should be less Maximum Total Rating!";
        break;
    case "MIN_TRIP_DATE_IS_INCORRECT":
        text = "Minimum Travel Date format should be 'YYYY-MM-DD'. ";
        break;
    case "MAX_TRIP_DATE_IS_INCORRECT":
        text = "Maximum Travel Date format should be 'YYYY-MM-DD'. ";
        break;
    case "MIN_TRIP_DATE_SHOULD_BE_LESS_THAN_MAX":
        text = "Minimum Travel Date should be less Maximum Travel Date!";
        break;
    case "MIN_TRIP_DATE_SHOULD_BE_LARGER_THAN_TODAY":
        text = "Minimum Travel Date should be after today!";
        break;
    case "MAX_TRIP_DATE_SHOULD_BE_LARGER_THAN_TODAY":
        text = "Maximum Travel Date should be after today!";
        break;
    default:
        text = CaptionKeys[i];

  }
  Captions.push(text);

 }
}
return Captions;
}
