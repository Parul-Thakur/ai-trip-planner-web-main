import { Button } from '@/components/ui/button'
import { GetPlaceDetails, getPhotoUrl  } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function PlaceCardItem({place}) {

  const [photoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    place&&GetPlacePhoto();
  },[place])

 const GetPlacePhoto = async () => {
  const data = {
    textQuery: place.placeName
  }
  try {
    const resp = await GetPlaceDetails(data);
    console.log('Place details response:', resp.data);
    console.log('Place details error:', resp.error);

    const photoArr = resp.data.places?.[0]?.photos;

    if (photoArr && photoArr.length > 0) {
      const photoName = photoArr[0].name; // Use first photo safely
       const PhotoUrl = getPhotoUrl(photoName);
        console.log('Final photo URL:', PhotoUrl);
      setPhotoUrl(PhotoUrl);
    } else {
      console.warn('No photos available for place:', place.placeName);
    }
  } catch (err) {
    console.error('Error fetching place details:', err);
  }
}


  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
        <div className='border rounded-xl p-3 mt-2 flex gap-5 
        hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
            <img src={photoUrl?photoUrl:'/placeholder.jpg'}
            alt={place.placeName}
            className='w-[130px] h-[130px] rounded-xl object-cover'
            />
            <div>
                <h2 className='font-bold text-lg'>{place.placeName}</h2>
                <p className='text-sm text-gray-400'>{place.placeDetails}</p>
                <h2 className='mt-2'>🕙 {place.timeToTravel}</h2>
                <h2 className='mt-2'>🎟️ {place.ticketPricing}</h2>
                {/* <Button size="sm"><FaMapLocationDot /></Button> */}
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardItem