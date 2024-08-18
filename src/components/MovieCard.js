import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  
  return (
    <article>
        <h1>{movie.title}</h1>
        <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;