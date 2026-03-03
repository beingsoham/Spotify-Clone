import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData, assets } from '../assets/assets'
import SongRow from './SongRow'

const DisplayAlbum = () => {

  const { id } = useParams();
  const albumData = albumsData.find(item => item.id == id);

  if (!albumData) {
    return <p className="text-white">Album not found</p>
  }

  return (
    <>
      <Navbar />

      {/* Album Header */}
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img
          className='w-48 rounded-lg shadow-lg'
          src={albumData.image}
          alt=""
        />

        <div className='flex flex-col'>
          <p className='uppercase text-sm font-semibold text-gray-400'>
            Album
          </p>

          <h2 className='text-5xl font-bold mt-2 mb-4 md:text-7xl'>
            {albumData.name}
          </h2>

          <p className='text-gray-400 mb-2'>
            {albumData.desc}
          </p>

          <p className='flex items-center gap-2 text-sm text-gray-400'>
            <img className='w-5' src={assets.spotify_logo} alt="" />
            <span className='font-semibold text-white'>Spotify</span>
            • {songsData.length} songs
          </p>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 sm:grid-cols-6 px-4 py-3 mt-10 text-sm text-gray-400 border-b border-gray-700">
        <p className="text-center">#</p>
        <p>Title</p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <p className="text-right">Duration</p>
        <p className="text-right"></p>
      </div>

      {/* Songs List */}
      {songsData.map((item, index) => (
        <SongRow
          key={index}
          item={item}
          index={index}
          albumName={albumData.name}
        />
      ))}

    </>
  )
}

export default DisplayAlbum