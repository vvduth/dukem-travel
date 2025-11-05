"use client";
import React, { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader, SendIcon } from "lucide-react";
import axios from "axios";
import EmptyChatBoxState from "./EmptyChatBoxState";
import GroupSizeUI from "./GroupSizeUI";
import BudgetUI from "./BudgetUI";
import TripDurationUI from "./TripDurationUI";
import FinalUI from "./FinalUI";
import { v4 as uuidv4 } from "uuid";
import { TripInfo, TripPlan } from "@/types";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUserDetails } from "@/app/provider";
type Message = {
  role: string;
  content: string;
  ui?: string;
};
const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isFinal, setIsFinal] = useState(false)
  const [tripDetails, setTripDetails] = useState<TripPlan>()
  const SaveTripDetails = useMutation(api.tripDetails.CreateTripDetails)
  const {userDetails, setUserDetails} = useUserDetails();

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.ui === "Final") {
      setIsFinal(true);
      setUserInput("Okay, generate the final trip itinerary.");
      onSend();
    }
  }, [messages]);

  const onSend = async () => {
    if (!userInput.trim()) {
      return;
    }
    setLoading(true);
    setUserInput("");
    const newMessages: Message = {
      role: "user",
      content: userInput,
    };
    setMessages((prev) => [...prev, newMessages]);
    const result = await axios.post("/api/aimodel", {
      messages: [...messages, newMessages],
      isFinal: isFinal,
    });

    console.log("AI response:", result?.data);
    
    

    !isFinal && setMessages((prev: Message[]) => [
      ...prev,
      {
        role: "assistant",
        content: result?.data?.resp,
        ui: result?.data?.ui,
      },
    ]);
    if (isFinal) {
      setTripDetails(result?.data?.trip_plan);
      const tripId = uuidv4();
      const saveTripResult = await SaveTripDetails({
        tripId: tripId,
        uid: userDetails?._id,
        tripDetail: result?.data?.trip_plan,
      });
    }
    setLoading(false);
  };

  const RenderGenerativeUi = (ui: string, content: string) => {
    switch (ui) {
      case "groupSize":
        return (
          <GroupSizeUI
            onSelectOptions={(v: string) => {
              setUserInput(v);
              onSend();
            }}
          />
        );
      case "budget":
        return (
          <BudgetUI onSelectOptions={(v: string) => {
            setUserInput(v);
            onSend();
          }}
          />
        )
      case "TripDuration":
        return (
          <TripDurationUI
            onSelectOptions={(v: string) => {
              setUserInput(v);
              onSend();
            }}
          />
        );
      case "Final":
        // For Final UI, pass the content which contains the trip plan JSON
        return <FinalUI viewTrip = {() => console.log("")} 
         disable = {!tripDetails}
        />;
      default:
        return null;
    }
  };
  return (
    <div className="h-[85vh] flex flex-col">
      {/* chat display */}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 && !loading && (
          <EmptyChatBoxState
            onSelectOption={(v: string) => {
              setUserInput(v);
              onSend();
            }}
          />
        )}
        {messages.map((msg, index) =>
          msg.role === "user" ? (
            <div key={index} className="flex justify-end mt-2">
              <div className="max-w-lg bg-sky-600 text-white px-4 py-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-start mt-2">
              <div className="max-w-full bg-primary text-white px-4 py-2 rounded-lg">
                {msg.ui !== "Final" && msg.content}
                {RenderGenerativeUi(msg.ui || "", msg.content)}
              </div>
            </div>
          )
        )}
        {loading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
              <Loader className="animate-spin" />
            </div>
          </div>
        )}
      </section>
      {/* user input */}
      <section>
        <div>
          <div className="border rounded-2xl p-4 relative">
            <Textarea
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none
                     resize-none"
              placeholder="Create a trip itinerary from Paris to new york"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
            />
            <Button
              size={"icon"}
              className="absolute bottom-6 right-6"
              onClick={() => onSend()}
            >
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatBox;
