import React from 'react'
import { MapPin, Users, DollarSign, Calendar, Heart, CheckCircle2, ChevronRight, Globe2 } from 'lucide-react'
import { Button } from './ui/button'



const FinalUI = ({ viewTrip, disable }: { viewTrip: () => void, disable: boolean }) => {

    return (
        <div className='flex flex-col items-center justify-center mt-6 p-6 bg-gray-500
        rounded-md'>
            <Globe2 className='text-primary text-4xl animate-bounce' />
            <h2 className='mt-3 text-lg font-semibold text-primary'>
                Planning your trip...
            </h2>
            <p className='text-sm text-center mt-1'>
                Gathering the best options and creating your personalized itinerary.
            </p>
            <Button disabled={disable} onClick={viewTrip} className='mt-2 w-full'>
                View trip
            </Button>
        </div>
    )
}

export default FinalUI
