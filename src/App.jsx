import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const { audioRef } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black flex flex-col'>

      {/* Main Content */}
      <div className='flex-1 flex flex-col lg:flex-row overflow-hidden'>

        {/* Sidebar (hidden on mobile, visible on desktop) */}
        <Sidebar />

        {/* Display Area */}
        <Display />

      </div>

      {/* Player (always visible at bottom) */}
      <Player />

      <audio ref={audioRef} preload="auto" />

    </div>
  )
}

export default App