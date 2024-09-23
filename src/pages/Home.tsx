import React, { useContext } from 'react'
import Card from '../components/Card'
import { TaskContext } from '../context/TaskContext'


const Home = () => {

  const {tasklist} = useContext(TaskContext)
  return (
    <div className='w-[calc(100%-16rem)] h-screen pt-3 px-3 flex gap-2 flex-wrap   bg-[#0f172a]  self-end'>
      {tasklist.map((cardDetails)=>{
        return <Card cardDetails={cardDetails} key={cardDetails.title}></Card>
      })}
    </div>
  )
}

export default Home