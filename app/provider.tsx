"use client";
import React, { useState, useEffect, useContext } from "react";
import Header from "@/components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";
const Provider = ({ children }: { children: React.ReactNode }) => {
  const CreateUser = useMutation(api.user.CreateNewUser);
  const [userDetails, setUserDetails] = useState<any>();
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
      <div>
        <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  );
};

export default Provider;

export const useUserDetails = () => {
  return useContext(UserDetailContext);
}