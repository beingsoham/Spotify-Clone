import React, { useContext } from 'react'
import { assets, albumsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();
  const { playlists, createPlaylist } = useContext(PlayerContext);

  return (
    <div className='hidden lg:flex lg:w-[25%] h-full p-2 flex-col gap-2 text-white'>

      {/* Top Section */}
      <div className='bg-[#121212] rounded-lg p-4 flex flex-col gap-4'>
        
        <div
          onClick={() => navigate("/")}
          className='flex items-center gap-4 cursor-pointer group'
        >
          <img className='w-6 opacity-80 group-hover:opacity-100' src={assets.home_icon} alt="" />
          <p className='font-semibold text-gray-300 group-hover:text-white'>
            Home
          </p>
        </div>

        <div className='flex items-center gap-4 cursor-pointer group'>
          <img className='w-6 opacity-80 group-hover:opacity-100' src={assets.search_icon} alt="" />
          <p className='font-semibold text-gray-300 group-hover:text-white'>
            Search
          </p>
        </div>
      </div>

      {/* Library Section */}
      <div className='bg-[#121212] rounded-lg flex flex-col flex-1 overflow-hidden'>

        {/* Header */}
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6 opacity-80' src={assets.stack_icon} alt="" />
            <p className='font-semibold text-gray-300'>Your Library</p>
          </div>

          <img
            onClick={() => {
              const name = prompt("Enter playlist name:");
              if (name) createPlaylist(name);
            }}
            className='w-5 cursor-pointer hover:opacity-100 transition'
            src={assets.plus_icon}
            alt=""
          />
        </div>

        {/* Scrollable Content */}
        <div className='px-2 pb-4 overflow-y-auto'>

          {/* Default Albums */}
          <div className='flex flex-col gap-1'>
            {albumsData.map((album) => (
              <div
                key={album.id}
                onClick={() => navigate(`/album/${album.id}`)}
                className='flex items-center gap-3 p-2 rounded-md hover:bg-[#1f1f1f] cursor-pointer group transition'
              >
                <img
                  src={album.image}
                  className='w-10 h-10 rounded object-cover'
                  alt=""
                />
                <div>
                  <p className='text-sm text-gray-200 group-hover:text-white'>
                    {album.name}
                  </p>
                  <p className='text-xs text-gray-400'>
                    Album
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Created Playlists */}
          {playlists.length > 0 && (
            <div className='flex flex-col gap-1 mt-3'>
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  onClick={() => navigate(`/playlist/${playlist.id}`)}
                  className='flex items-center gap-3 p-2 rounded-md hover:bg-[#1f1f1f] cursor-pointer group transition'
                >
                  <div className='w-10 h-10 bg-[#282828] flex items-center justify-center rounded'>
                    🎵
                  </div>
                  <div>
                    <p className='text-sm text-gray-200 group-hover:text-white'>
                      {playlist.name}
                    </p>
                    <p className='text-xs text-gray-400'>
                      Playlist • {playlist.songs.length} songs
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Promo Cards (Always Visible) */}
          <div className='mt-6 space-y-4'>

            <div className='bg-[#242424] p-4 rounded-lg flex flex-col gap-2 hover:bg-[#2a2a2a] transition'>
              <h1 className='font-semibold'>
                Create your first playlist
              </h1>
              <p className='text-sm text-gray-400'>
                It’s easy, we’ll help you
              </p>
              <button
                onClick={() => {
                  const name = prompt("Enter playlist name:");
                  if (name) createPlaylist(name);
                }}
                className='mt-3 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition'
              >
                Create playlist
              </button>
            </div>

            <div className='bg-[#242424] p-4 rounded-lg flex flex-col gap-2 hover:bg-[#2a2a2a] transition'>
              <h1 className='font-semibold'>
                Let’s find podcasts to follow
              </h1>
              <p className='text-sm text-gray-400'>
                We’ll keep you updated on new episodes
              </p>
              <button className='mt-3 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition'>
                Browse podcasts
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Sidebar