import React, { useState, useRef, useEffect } from 'react';
import "../Styles/music.css";
import one from "./music/1.mp3" ;
import two from "./music/2.mp3" ;
import three from "./music/3.mp3" ;
import four from "./music/4.mp3" ;
import five from "./music/5.mp3" ;
import six from "./music/6.mp3" ;
import seven from "./music/7.mp3" ;



const MusicPlayer = () => {
  const [selectedMusic, setSelectedMusic] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    if (selectedMusic !== '') {
      // Create a new audio object
      audioRef.current = new Audio(selectedMusic);

      const playAudio = async () => {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error('Error playing the audio:', error);
        }
      };

      playAudio();
    }

    return () => {
      // Clean up the audio object on component unmount or when selectedMusic changes
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [selectedMusic]);

  const handleMusicChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'off') {
      setSelectedMusic('');
    } else {
      setSelectedMusic(selectedValue);
    }
  };

  return (
    <div className="music-player">
      <select className="music-select" onChange={handleMusicChange} value={selectedMusic}>
        <option value="">Select Music</option>
        <option value="off">Off</option>
        <option value={one}>🎵 1</option>
        <option value={two}>🎵 2</option>
        <option value={three}>🎵 3</option>
        <option value={four}>🎵 4</option>
        <option value={five}>🎵 5</option>
        <option value={six}>🎵 6</option>
        <option value={seven}>🎵 7</option>
      </select>
    </div>
  );
};

export default MusicPlayer;
