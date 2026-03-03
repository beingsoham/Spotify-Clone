import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const {
    seekBar,
    seekBg,
    track,
    playStatus,
    play,
    pause,
    time,
    next,
    previous,
    volume = 0.5,
    changeVolume,
    isMuted = false,
    toggleMute,
    isLoop,
    toggleLoop,
    seekSong
  } = useContext(PlayerContext);

  if (!track) return null;

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>

      {/* LEFT SECTION */}
      <div className='hidden lg:flex items-center gap-4 min-w-[180px]'>
        <img className='w-12 rounded' src={track.image} alt="" />
        <div>
          <p className='text-sm font-medium truncate w-[120px]'>
            {track.name}
          </p>
          <p className='text-xs text-gray-400 truncate w-[120px]'>
            {track.desc?.slice(0, 20)}
          </p>
        </div>
      </div>

      {/* CENTER SECTION */}
      <div className='flex flex-col items-center gap-2 flex-1'>

        <div className='flex gap-5 items-center'>

          {/* Shuffle (disabled visually) */}
          <img
            className='w-4 opacity-40 cursor-not-allowed'
            src={assets.shuffle_icon}
            alt=""
          />

          {/* Previous */}
          <img
            onClick={previous}
            className='w-4 cursor-pointer opacity-80 hover:opacity-100'
            src={assets.prev_icon}
            alt=""
          />

          {/* Play / Pause */}
          {
            playStatus
              ? <img onClick={pause} className='w-7 cursor-pointer' src={assets.pause_icon} alt="" />
              : <img onClick={play} className='w-7 cursor-pointer' src={assets.play_icon} alt="" />
          }

          {/* Next */}
          <img
            onClick={next}
            className='w-4 cursor-pointer opacity-80 hover:opacity-100'
            src={assets.next_icon}
            alt=""
          />

          {/* Loop */}
          <img
            onClick={toggleLoop}
            className={`w-4 cursor-pointer transition ${
              isLoop ? "opacity-100" : "opacity-60"
            }`}
            src={assets.loop_icon}
            alt=""
          />

        </div>

        {/* SEEK BAR */}
        <div className='flex items-center gap-3 w-[60vw] max-w-[550px]'>

          <p className='text-xs text-gray-400'>
            {time?.currentTime?.minute || 0}:
            {time?.currentTime?.second < 10 ? "0" : ""}
            {time?.currentTime?.second || 0}
          </p>

          <div
            ref={seekBg}
            onClick={seekSong}
            className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className='h-1 border-none w-0 bg-green-500 rounded-full'
            />
          </div>

          <p className='text-xs text-gray-400'>
            {time?.totalTime?.minute || 0}:
            {time?.totalTime?.second < 10 ? "0" : ""}
            {time?.totalTime?.second || 0}
          </p>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className='hidden lg:flex items-center gap-4 min-w-[180px] justify-end'>

        <img className='w-4 cursor-pointer hover:opacity-100 transition' src={assets.mic_icon} alt="" />
        <img className='w-4 cursor-pointer hover:opacity-100 transition' src={assets.queue_icon} alt="" />
        <img className='w-4 cursor-pointer hover:opacity-100 transition' src={assets.speaker_icon} alt="" />

        {/* Volume Section */}
        <div className='flex items-center gap-2'>
          
          <img
            onClick={toggleMute}
            className='w-4 cursor-pointer hover:opacity-100 transition'
            src={assets.volume_icon}
            alt=""
          />

          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={(e) => changeVolume(e.target.value)}
            className="w-24 h-1 cursor-pointer accent-white"
          />

        </div>

        <img className='w-4 cursor-pointer hover:opacity-100 transition' src={assets.mini_player_icon} alt="" />
        <img className='w-4 cursor-pointer hover:opacity-100 transition' src={assets.zoom_icon} alt="" />

      </div>

    </div>
  )
}

export default Player