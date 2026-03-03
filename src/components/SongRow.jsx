import React, { useState, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongRow = ({ item, index, albumName }) => {

  const {
    setTrack,
    play,
    playlists,
    addSongToPlaylist
  } = useContext(PlayerContext);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      onClick={() => {
        setTrack(item);
        play();
      }}
      className="relative grid grid-cols-4 sm:grid-cols-6 items-center gap-4 px-4 py-2 text-sm text-gray-400 hover:bg-[#181818] rounded-md group cursor-pointer transition"
    >

      <p className="text-center">{index + 1}</p>

      <div className="flex items-center gap-3 min-w-0">
        <img className="w-10 h-10 rounded" src={item.image} alt="" />
        <div>
          <p className="text-white truncate">{item.name}</p>
          <p className="text-xs text-gray-400 truncate">
            {item.desc.slice(0, 30)}
          </p>
        </div>
      </div>

      <p className="hidden sm:block truncate">{albumName}</p>

      <p className="hidden sm:block text-[15px]">
        5 days ago
      </p>

      <p className="text-[15px] text-right">
        {item.duration}
      </p>

      {/* Menu */}
      <div className="relative text-right">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
          className="text-gray-400 hover:text-white"
        >
          ⋯
        </button>

        {showMenu && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 mt-2 w-40 bg-[#282828] rounded shadow-lg z-10"
          >
            {playlists.length === 0 ? (
              <p className="p-2 text-sm text-gray-400">
                No playlists
              </p>
            ) : (
              playlists.map((pl) => (
                <div
                  key={pl.id}
                  onClick={() => {
                    addSongToPlaylist(pl.id, item);
                    setShowMenu(false);
                  }}
                  className="p-2 text-sm hover:bg-[#3e3e3e] cursor-pointer"
                >
                  {pl.name}
                </div>
              ))
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default SongRow;