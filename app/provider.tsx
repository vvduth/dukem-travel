"use client";
import React, { useState, useEffect, useContext } from "react";
import Header from "@/components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";
import { TripDetailsContext, TripDetailsContextType } from "@/context/TripDetailsContext";
import { TripPlan } from "@/types";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const CreateUser = useMutation(api.user.CreateNewUser);
  const [userDetails, setUserDetails] = useState<any>();
  const [tripDetailsInfo, setTripDetailsInfo] = useState<TripPlan | null>(null);
  const { user } = useUser();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);
  
  const CreateNewUser = async () => {
    if (user) {
      // save new user if not exist
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress || "",
        imageUrl: user?.imageUrl || "",
        name: user?.fullName || "",
        subscription: undefined,
      });
      setUserDetails(result);
    }
  };
  
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <TripDetailsContext.Provider value={{tripDetailsInfo, setTripDetailsInfo}}>
        <div>
          <Header />
          {children}
        </div>
      </TripDetailsContext.Provider>
    </UserDetailContext.Provider>
  );
};

export default Provider;

export const useUserDetails = () => {
  return useContext(UserDetailContext);
}

export const useTripDetails = (): TripDetailsContextType => {
  const context = useContext(TripDetailsContext);
  if (!context) {
    throw new Error("useTripDetails must be used within TripDetailsContext.Provider");
  }
  return context;
}