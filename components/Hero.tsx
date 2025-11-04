import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import {
    ArrowBigDown,
  ArrowDown,
  Building,
  Globe,
  Globe2,
  GlobeIcon,
  Plane,
  SendIcon,
} from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
const suggestions = [
  {
    title: "Create new trip",
    icon: <Globe2 className="h-4 w-4 text-sky-500" />,
  },
  {
    title: "Inspire me where to go",
    icon: <Plane className="h-4 w-4 text-rose-500" />,
  },
  {
    title: "Discover hidden gems",
    icon: <Building className="h-4 w-4 text-yellow-500" />,
  },
  {
    title: "Adventure destinations",
    icon: <Globe2 className="h-4 w-4 text-green-500" />,
  },
];
const Hero = () => {
  return (
    <div className="mt-24 w-full p-8 md:p-0 flex justify-center">
      {/* content */}
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold">
          Hey, I am your personal{" "}
          <span className="text-primary">travel assistant</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Tell Dukem what you need help with and get personalized
          recommendations.
        </p>
        {/* input box */}
        <div>
          <div className="border rounded-2xl p-4 relative">
            <Textarea
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none
                     resize-none"
              placeholder="Create a trip itinerary from Paris to new york"
            />
            <Button size={"icon"} className="absolute bottom-6 right-6">
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/*  suggestion list */}
        <div className="flex gap-5">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border rounded-full p-2 cursor-pointer
            hover:bg-primary hover:text-white"
            >
              {item.icon}
              <h2 className="text-sm">{item.title}</h2>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center flex-col">
            <h2 className="my-7 mt-14 flex gap-2 text-center">
          Not sure where to start? <strong>See how it works </strong><ArrowDown className="w-4 h-4"/>
        </h2>
        {/*  video section */}

        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.example.com/dummy-video"
          thumbnailSrc="placeholder.jpg"
          thumbnailAlt="Dummy Video Thumbnail"
        />
        </div>
      </div>
    </div>
  );
};

export default Hero;
