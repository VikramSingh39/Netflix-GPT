
import { Img_CDN } from './utils/constant'

const MovieCard = ({poster_path}) => {
  
  return (
    <>
    <img src={Img_CDN + poster_path
 } alt="Movie Poster" />
    </>
  )
}

export default MovieCard