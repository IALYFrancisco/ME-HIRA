import { createContext, useState } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = (audioElement) => {
    if (currentAudio && currentAudio !== audioElement) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    if (audioElement === currentAudio && isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play();
      setCurrentAudio(audioElement);
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{ play }}>
      {children}
    </AudioContext.Provider>
  );
};
