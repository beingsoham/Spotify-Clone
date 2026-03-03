import React, { useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import DisplayPlaylist from './DisplayPlaylist'

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : null;

  const currentAlbum = isAlbum
    ? albumsData.find(item => item.id == albumId)
    : null;

  const bgColor = currentAlbum ? currentAlbum.bgColor : "#121212";

  useEffect(() => {

    if (!displayRef.current) return;

    if (isAlbum && bgColor) {
      displayRef.current.style.background =
        `linear-gradient(${bgColor}, #121212)`
    } else {
      displayRef.current.style.background = "#121212"
    }

  }, [isAlbum, bgColor])

  return (
    <div
      ref={displayRef}
      className='flex-1 overflow-y-auto px-4 pt-4 lg:px-6 text-white'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
        <Route path='/playlist/:id' element={<DisplayPlaylist />} />
      </Routes>
    </div>
  )
}

export default Display