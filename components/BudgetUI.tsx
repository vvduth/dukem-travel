import { Binoculars } from 'lucide-react'
import React from 'react'


export const SelectBugetOptions = [
    {
        id: 1, title: "Cheap",
        desc: "Budget-friendly options for cost-conscious travelers.",
        icon: <Binoculars className="w-6 h-6"/>,
        color: "bg-green-600 text-green-600",
    }, {
        id: 2, title: "Moderate",
        desc: "Balanced choices for a comfortable travel experience.",
        icon: <Binoculars className="w-6 h-6"/>,
        color: "bg-yellow-600 text-yellow-600",
    }, {
        id: 3, title: "Luxury",
        desc: "Premium selections for luxury and high-end travel.",
        icon: <Binoculars className="w-6 h-6"/>,
        color: "bg-rose-600 text-rose-600",
    }
]
const BudgetUI = ({ onSelectOptions }: {
    onSelectOptions: (value: string) => void;
}) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-3 gap-2 items-center mt-1'>
      {
        SelectBugetOptions.map((item, index) => (
            <div className={`p-3 border rounded-2xl ${item.color} hover:border-primary cursor-pointer`} 
            key={index}
            onClick={() => onSelectOptions(item.title + ": " + item.desc)}
            >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
            </div>
        ))
      }
    </div>
  )
}


export default BudgetUI
