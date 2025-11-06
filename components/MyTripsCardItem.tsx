"use client";
import { TripFromConvex } from "@/app/my-trips/page";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigRightIcon } from "lucide-react";
import axios from "axios";
const MyTripsCardItem = ({ trip }: { trip: TripFromConvex }) => {
const [photoUrl, setPhotoUrl] = useState<string>()
    useEffect(() => {
    trip && getPlaceDetailsFromGoogle();
  },[trip])
  const getPlaceDetailsFromGoogle = async () => {
    const result = await axios.post('/api/google-place-detail', {
      placeName: trip?.tripDetail?.destination || ''
    })
    console.log('Google Place Detail:', result.data);
    if (!result.data || result.data.error) {
      return
    }
    setPhotoUrl(result.data);
  }
  return (
    <div className="p-3 shadow rounded-2xl">
      <Image
        src={photoUrl || "/placeholder.jpg"}
        alt={trip.tripId}
        width={400}
        height={400}
        className="rounded-2xl object-cover w-full h-[270px]"
      />
      <h2 className="flex gap-2 font-semibold text-xl">
        {" "}
        {trip?.tripDetail?.origin} <ArrowBigRightIcon />{" "}
        {trip?.tripDetail?.destination}
      </h2>
      <h2 className="mt-2 text-gray-500">
        {trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget} buget
      </h2>
    </div>
  );
};

export default MyTripsCardItem;
