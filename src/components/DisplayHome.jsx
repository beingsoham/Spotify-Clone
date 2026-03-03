import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'  
import Albumitem from './Albumitem'
import Songitem from './Songitem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-3xl'>Featured Charts</h1>
        <div className='flex gap-4 overflow-auto'>
          {albumsData.map( (item,index) => (<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>

         <div className='mb-4'>
        <h1 className='my-5 font-bold text-3xl'>Todays's Biggest Hit's</h1>
        <div className='flex gap-4 overflow-auto'>
          {songsData.map( (item,index) => (<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
