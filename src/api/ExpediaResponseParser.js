var hotel=require('../models/hotel');

module.exports.parseHotelData= function (data)
{
      var Hotels=new Array();
      var tempHotel;
      if (data){
        if(data.offers)
        {
          if (data.offers.Hotel && data.offers.Hotel.length>0)
          {
            for (var i=0;i<data.offers.Hotel.length;i++)
            {


              tempHotel=new hotel();
              tempHotel.name=data.offers.Hotel[i].hotelInfo.hotelName;
              tempHotel.url=data.offers.Hotel[i].hotelUrls.hotelInfositeUrl;
              tempHotel.imageUrl=data.offers.Hotel[i].hotelInfo.hotelImageUrl;
              tempHotel.guestRating=data.offers.Hotel[i].hotelInfo.hotelGuestReviewRating;
              tempHotel.starRating=data.offers.Hotel[i].hotelInfo.hotelStarRating;
              tempHotel.totalReviews=data.offers.Hotel[i].hotelInfo.hotelReviewTotal;
              tempHotel.city=data.offers.Hotel[i].destination.shortName;
              tempHotel.price=data.offers.Hotel[i].hotelPricingInfo.totalPriceValue;
              tempHotel.priceCurrency=data.offers.Hotel[i].hotelPricingInfo.currency;
              Hotels.push(tempHotel);
            }
          }
        }
      }
      return Hotels;
}
