import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'
import Navbar from './Navbar'
import { assets } from '../assets/assets'

const DisplayPlaylist = () => {

  const { id } = useParams();
  const { playlists, setTrack, play } = useContext(PlayerContext);

  const playlist = playlists.find(pl => pl.id === id);

  if (!playlist) return <p className='text-white'>Playlist not found</p>;

  return (
    <>
      <Navbar />

      {/* Header */}
      <div 
        className='mt-10 p-6 rounded-lg'
        style={{ background: playlist.bgColor }}
      >
        <p className='uppercase text-sm font-semibold text-gray-300'>Playlist</p>

        <h1 className='text-6xl font-bold mt-3'>
          {playlist.name}
        </h1>

        <p className='mt-4 text-gray-300'>
          {playlist.songs.length} songs
        </p>
      </div>

      {/* Songs */}
      <div className='mt-6'>
        {playlist.songs.map((song, index) => (
          <div
            key={index}
            onClick={() => {
              setTrack(song)
              play()
            }}
            className='flex items-center gap-4 p-3 hover:bg-[#1f1f1f] rounded cursor-pointer'
          >
            <p className='text-gray-400 w-5'>{index + 1}</p>

            <img className='w-10 rounded' src={song.image} alt="" />

            <div>
              <p className='text-white'>{song.name}</p>
              <p className='text-gray-400 text-sm'>{song.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DisplayPlaylist