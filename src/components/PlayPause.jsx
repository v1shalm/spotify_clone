import { FaPause, FaPlay } from 'react-icons/fa';

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  const currentTitle = activeSong?.attributes
    ? activeSong?.attributes?.name
    : activeSong?.title;
  const currentSong = song?.attributes ? song?.attributes?.name : song?.title;

  return isPlaying && currentTitle === currentSong ? (
    <FaPause size={35} className="text-green-400" onClick={handlePause} />
  ) : (
    <FaPlay size={35} className="text-green-400" onClick={handlePlay} />
  );
};

export default PlayPause;
