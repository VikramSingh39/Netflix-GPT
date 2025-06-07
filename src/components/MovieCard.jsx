import { Img_CDN } from './utils/constant'

const MovieCard = ({poster_path, id}) => {
  
  return (
    <>
    <img src={Img_CDN + poster_path} alt="Movie Poster" className='rounded w-40 mx-auto' />
    </>
  )
}

export default MovieCard;