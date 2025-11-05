import { Building, Globe2, Plane } from 'lucide-react';
import React from 'react'
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
const EmptyChatBoxState = () => {
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-3xl text-center'>Start a new conversation</h2>
        <p className='text-center text-gray-400 m-2'>Ask me anything about your travel plans!</p>
        <div className="flex flex-col gap-5">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border rounded-xl p-5 cursor-pointer
            hover:bg-primary hover:text-white"
            >
              {item.icon}
              <h2 className="text-lg p-3">{item.title}</h2>
            </div>
          ))}
        </div>
    
    </div>
  )
}

export default EmptyChatBoxState
