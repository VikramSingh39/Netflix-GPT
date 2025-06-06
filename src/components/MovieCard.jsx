
import { Link } from 'react-router-dom';
import { Img_CDN } from './utils/constant'

const MovieCard = ({poster_path, id}) => {
  
  return (
    <>
    {/* <Link to={`/movie/${id}`}> */}
    <img src={Img_CDN + poster_path} alt="Movie Poster" className='rounded' />
    {/* </Link> */}
    
    </>
  )
}

export default MovieCard;