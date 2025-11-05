import { Baby, PersonStanding, Plane, Wine } from 'lucide-react'
import React from 'react'


export const SelectTravalesList = [
    {id: 1, title: "Just me",
        desc: "I prefer solo adventures and exploring at my own pace.",
        icon : <Plane className="w-6 h-6"/>,
        people: "1",
    },
    {id: 2, title: "Couple",
        desc: "Traveling with a partner to share special moments together.",
        icon : <Wine className="w-6 h-6"/>,
        people: "2",
    },
    {id: 3, title: "Family",
        desc: "Planning trips that cater to all family members, big and small.",
        icon : <Baby className="w-6 h-6"/>,
        people: "4",
    },
    {
        id: 4, title: "Group",
        desc: "Organizing travel for a group of friends or colleagues.",
        icon : <PersonStanding className="w-6 h-6"/>,
        people: "5 to 10 people",
    }
]
const GroupSizeUI = ({ onSelectOptions }: {
    onSelectOptions: (value: string) => void;
}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 items-center mt-1'>
      {
        SelectTravalesList.map((item, index) => (
            <div className='p-3 border rounded-2xl bg-yellow-600  hover:border-primary cursor-pointer' 
            key={index}
            onClick={() => onSelectOptions(item.title + ": " + item.people)}
            >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
            </div>
        ))
      }
    </div>
  )
}

export default GroupSizeUI
