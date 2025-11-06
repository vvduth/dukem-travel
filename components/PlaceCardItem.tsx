"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Ticket, Clock } from 'lucide-react'
import { Button } from './ui/button'
import { Activity } from '@/types'
import axios from 'axios'
const PlaceCardItem = ({activity}: {
    activity: Activity
}) => {

   const [photoUrl, setPhotoUrl] = useState<string>()
  useEffect(() => {
    activity && getPlaceDetailsFromGoogle();
  },[activity])
  const getPlaceDetailsFromGoogle = async () => {
    const result = await axios.post('/api/google-place-detail', {
      placeName: activity.place_name + ': ' + activity.place_address
    })
    console.log('Google Place Detail:', result.data);
    if (!result.data || result.data.error) {
      return
    }
    setPhotoUrl(result.data);
  }
  return (
      <div >
              <Image 
                src={photoUrl || "/images/tokyo.jpg"}
                alt="activity-image"
                width={400}
                height={200}
                className="object-cover rounded-xl w-full h-[300px]"
              />
              <h2 className="font-semibold text-lg">{activity?.place_name}</h2>
              <p className="text-gray-500 line-clamp-2">{activity?.place_details}</p>
              <h2 className="flex gap-2 text-sky-500"><Ticket /> {activity?.ticket_pricing}</h2>
              <p className="flex text-orange-400 gap-2"><Clock /> {activity?.best_time_to_visit}</p>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${activity.place_name}`}
                target="_blank"
              >
              
              <Button variant={"outline"} size={"sm"} className="w-full mt-2">
                View 
              </Button></Link>
            </div>
  )
}

export default PlaceCardItem
