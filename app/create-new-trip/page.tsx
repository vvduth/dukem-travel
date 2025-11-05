import ChatBox from '@/components/ChatBox'
import React from 'react'

const CreateNewTrip = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-10 p-10'> 
      <div>
        <ChatBox    />
      </div>
      <div>map and trip plan</div>
    </div>
  )
}

export default CreateNewTrip
