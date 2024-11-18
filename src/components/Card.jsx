import React from 'react'

export default function Card(props) {
  return (
    <>
      <ul title={props.description} className='w-48 h-44 rounded-3xl text-white bg-green-600 shadow-sm shadow-gray-400 flex flex-col items-center justify-center cursor-auto'>
        <li className='font-light text-4xl p-2.5 border border-white w-[60px] h-[60px] rounded-full text-center'>{props.icon}</li>
        <li className='text-2xl pt-3 font-semibold'>{props.value}</li>
        <li className='font-light'>{props.label}</li>
      </ul>
    </>
  )
}

