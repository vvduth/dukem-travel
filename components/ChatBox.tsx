"use client";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader, SendIcon } from "lucide-react";
import axios from "axios";
import EmptyChatBoxState from "./EmptyChatBoxState";
type Message = {
  role: string;
  content: string;
};
const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
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
    });
    setMessages((prev: Message[]) => [
      ...prev,
      {
        role: "assistant",
        content: result?.data?.resp,
      },
    ]);
    console.log("AI response:", result?.data);
    setLoading(false);
  };
  return (
    <div className="h-[85vh] flex flex-col">
      {/* chat display */}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 && !loading && (
            <EmptyChatBoxState />
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
              <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                {msg.content}
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
