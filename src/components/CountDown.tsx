 'use client'

import React from 'react'
import Countdown from 'react-countdown'
const endingDate = new Date ('2023-12-25')

const CountDown = () => {

  return (
    <div>
      <Countdown
       date={endingDate}
       className=' font-bold text-5xl text-yellow-300'
      />
    </div>
  )
}

export default CountDown
