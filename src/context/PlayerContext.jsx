import React, { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext(null);

const PlayerContextProvider = ({ children }) => {

  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  // Playlists
  const [playlists, setPlaylists] = useState([]);

  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  const [track, setTrack] = useState(songsData[1]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { minute: 0, second: 0 },
    totalTime: { minute: 0, second: 0 }
  });

  // ✅ Create playlist
  const createPlaylist = (name) => {
    if (!name) return;

    const newPlaylist = {
      id: Date.now().toString(),
      name,
      songs: [],
      bgColor: `linear-gradient(180deg, #3b82f6, #121212)`
    };

    setPlaylists(prev => [...prev, newPlaylist]);
  };

  // ✅ Add song to playlist
  const addSongToPlaylist = (playlistId, song) => {
    setPlaylists(prev =>
      prev.map(pl =>
        pl.id === playlistId
          ? { ...pl, songs: [...pl.songs, song] }
          : pl
      )
    );
  };

  // Play
  const play = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setPlayStatus(true);
  };

  // Pause
  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setPlayStatus(false);
  };

  // Volume
  const changeVolume = (value) => {
    const newVolume = value / 100;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleMute = () => {
    const newMute = !isMuted;
    audioRef.current.muted = newMute;
    setIsMuted(newMute);
  };

  const toggleLoop = () => {
    const newLoop = !isLoop;
    audioRef.current.loop = newLoop;
    setIsLoop(newLoop);
  };

  const seekSong = (e) => {
    const width = seekBg.current.offsetWidth;
    const offsetX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (offsetX / width) * duration;
  };

  const next = () => {
    const currentIndex = songsData.findIndex(song => song.id === track.id);

    if (currentIndex < songsData.length - 1) {
      setTrack(songsData[currentIndex + 1]);
    } else {
      setTrack(songsData[0]);
    }
  };

  const previous = () => {
    const currentIndex = songsData.findIndex(song => song.id === track.id);

    if (currentIndex > 0) {
      setTrack(songsData[currentIndex - 1]);
    } else {
      setTrack(songsData[songsData.length - 1]);
    }
  };

  // When track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track.file;
      if (playStatus) {
        audioRef.current.play();
      }
    }
  }, [track]);

  // Update time
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      const current = audio.currentTime;
      const duration = audio.duration || 0;

      if (seekBar.current && duration) {
        seekBar.current.style.width = `${(current / duration) * 100}%`;
      }

      setTime({
        currentTime: {
          minute: Math.floor(current / 60),
          second: Math.floor(current % 60)
        },
        totalTime: {
          minute: Math.floor(duration / 60),
          second: Math.floor(duration % 60)
        }
      });
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    play,
    pause,
    next,
    previous,
    volume,
    changeVolume,
    isMuted,
    toggleMute,
    isLoop,
    toggleLoop,
    seekSong,
    playlists,
    createPlaylist,
    addSongToPlaylist,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;