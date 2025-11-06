import ChatBox from '@/components/ChatBox'
import Itinerary from '@/components/Itinerary'
import React from 'react'

const CreateNewTrip = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10 p-10'> 
      <div>
        <ChatBox    />
      </div>
      <div className='col-span-2'>
        <Itinerary />
      </div>
    </div>
  )
}

export default CreateNewTrip
