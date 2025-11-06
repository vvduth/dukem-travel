"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Clock, Star, Ticket, Wallet } from "lucide-react";
import Link from 'next/link';
import { Hotel } from '@/types';
import { Button } from './ui/button';
import axios from 'axios';
const HotelCardItem = ({hotel}: {
    hotel: Hotel
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>()
  useEffect(() => {
    hotel && getPlaceDetailsFromGoogle();
  },[hotel])
  const getPlaceDetailsFromGoogle = async () => {
    const result = await axios.post('/api/google-place-detail', {
      placeName: hotel.hotel_name + ' ' + hotel.hotel_address
    })
    console.log('Google Place Detail:', result.data);
    if (!result.data || result.data.error) {
      return
    }
    setPhotoUrl(result.data);
  }
  return (
      <div className="flex flex-col gap-1">
              <Image
                className="rounded-xl shadow object-cover mb-2  w-full h-[270px]" 
                src={photoUrl || "/images/newyork.jpg"}
                alt="place-image"
                width={400}
                height={200}
              />
              <h2 className="font-semibold text-lg">{hotel.hotel_name}</h2>
              <h2 className="text-gray-500 text-xs">{hotel.hotel_address}</h2>
              <div className="flex justify-between items-center">
                <p className="flex gap-2 text-green-400 text-xs">
                  <Wallet /> {hotel.price_per_night}
                </p>
                <p className="flex gap-2 text-yellow-400 text-xs">
                  <Star /> {hotel.rating}
                </p>
              </div>
              <p className="line-clamp-2 text-gray-400">{hotel.description}</p>
              <Link
                href={`https://google.com/maps/search/?api=1&query=${hotel.hotel_name}`}
                target="_blank">
              <Button variant={"outline"} className="mt-1">
                View
              </Button>
              </Link>
            </div>
  )
}

export default HotelCardItem
