"use client";

import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { Hotel, TripPlan } from "@/types";
import HotelCardItem from "./HotelCardItem";
import PlaceCardItem from "./PlaceCardItem";
import { useTripDetails } from "@/app/provider";
export default function Itinerary() {
  const { tripDetailsInfo, setTripDetailsInfo } = useTripDetails();
  const [tripData, setTripData] = useState<TripPlan | null>(null);
  useEffect(() => {
    tripDetailsInfo&& setTripData(tripDetailsInfo);
  }, [tripDetailsInfo]);
  const data = tripData
    ? [
        {
          title: "Recommended Hotels",
          content: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {tripDetailsInfo?.hotels.map((hotel: Hotel, index) => (
                <HotelCardItem key={index} hotel={hotel} />
              ))}
            </div>
          ),
        },
        ...tripData?.itinerary.map((dayData, index) => ({
          title: `Day ${dayData.day}`,
          content: (
            <div key={index}>
              <p> Best time: {dayData?.best_time_to_visit_day}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {dayData?.activities.map((activity, idx) => (
                  <PlaceCardItem key={idx} activity={activity} />
                ))}
              </div>
            </div>
          ),
        })),
      ]
    : [];
  return (
    <div className="relative w-full  h-[85vh] overflow-auto">
      {tripData && <Timeline data={data} tripData={tripData ? tripData : null} />}
    </div>
  );
}
