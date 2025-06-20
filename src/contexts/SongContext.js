import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = (songElement) => {
    if (currentSong && currentSong !== songElement) {
      currentSong.pause();
      currentSong.currentTime = 0;
    }

    if (songElement === currentSong && isPlaying) {
      songElement.pause();
      setIsPlaying(false);
    } else {
      songElement.play();
      setCurrentSong(songElement);
      setIsPlaying(true);
    }
  };

  return (
    <SongContext.Provider value={{ play }}>
      {children}
    </SongContext.Provider>
  );
};
