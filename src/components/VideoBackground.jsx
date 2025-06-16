import { useSelector } from 'react-redux'
import useFetchTrailer from './hooks/useFetchTrailer';

const VideoBackground = ({movieId} ) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const movies = useSelector(store => store.movies?.nowPlayingMovies)

  const mainMovie = movies?.[1] || {};
  const {original_title, overview, id} = mainMovie;

console.log(original_title);

        const words = overview?.split(" ");
      const shortOverview = words?.length > 40 ? words.slice(0, 40).join(" ") + "..." : overview;

  useFetchTrailer(movieId);

  return (
    <div className='w-screen bg-black pt-[15%] md:pt-0 relative'>
              <iframe  className='w-screen aspect-video'  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerPolicy="strict-origin-when-cross-origin" ></iframe>

    <div className='w-screen  aspect-video  px-4 md:px-15 absolute top-[12%] z-10 text-white bg-gradient-to-r from-black opacity-85'>
      <div className='pt-[50%] md:pt-[20%]'>
        <h1 className='text-xl md:text-4xl lg:text-6xl'>{original_title}</h1>
        <p className='py-6 lg:inline-block text-lg w-[40%] hidden'>{shortOverview}</p>
      

        <div className='flex gap-4 mt-2 md:mt-4 lg:mt-0'>
            <button className='text-xl bg-white cursor-pointer md:text-2xl font-light rounded text-black px-2 md:px-5 md:py-1 hover:opacity-80'><i className="ri-play-fill "></i> Play</button>
            <button className='hidden md:inline-block bg-gray-200 text-2xl font-light rounded text-black opacity-70 hover:opacity-80 px-5 py-1 cursor-pointer'> <i className="ri-information-line"></i> More Info</button>
        </div>
        </div>
    </div>
    </div>
  ) 
}

export default VideoBackground