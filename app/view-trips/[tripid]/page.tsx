"use client";
import { TripFromConvex } from "@/app/my-trips/page";
import { useTripDetails, useUserDetails } from "@/app/provider";
import Itinerary from "@/components/Itinerary";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ViewtripPage = () => {
  const { tripid } = useParams();
  const { userDetails, setUserDetails } = useUserDetails();
  const { tripDetailsInfo, setTripDetailsInfo } = useTripDetails();
  const convex = useConvex();
  const [tripData, setTripData] = useState<TripFromConvex>()

  useEffect(() => {
    userDetails && GetTrip();
  }, [userDetails]);
  const GetTrip = async () => {
    const result = await convex.query(api.tripDetails.GetTripById, {
      uid: userDetails?._id,
      tripid: (tripid as string) ?? "",
    });
    setTripData(result);
    setTripDetailsInfo(result?.tripDetail);
  };
  return <div>
    <Itinerary  />
  </div>;
};

export default ViewtripPage;
