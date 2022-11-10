import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'HIP-HOP');

  if (isFetching) return <Loader title="Loading songs...." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
        <h1 className="font-extrabold text-3xl text-[#2ebd59] text-left">
          Discover {genreTitle}{' '}
        </h1>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'Hip-Hop'}
          className="  bg-[#2b3729]   text-[#00bf6f] px-3 py-3 text-md font-semibold rounded-xl  outline-none sm:mt-0  mt-5 text-center items-center focus:outline-none focus:ring focus:ring-green-300 "
        >
          {genres.map((genre) => (
            <option className="" key={genre.value} value={genre.value}>
              {genre.title}{' '}
            </option>
          ))}
        </select>
      </div>
      <div className=" flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
