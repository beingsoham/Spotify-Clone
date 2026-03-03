import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { songsData } from '../assets/assets'

const Songitem = ({ id, name, image, desc }) => {

  const { setTrack, play } = useContext(PlayerContext)

  const handleClick = () => {
    const selectedSong = songsData.find(song => song.id === id)
    setTrack(selectedSong)
    play()
  }

  return (
    <div 
      onClick={handleClick}
      className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'
    >
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default Songitem