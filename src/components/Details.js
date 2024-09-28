import { useParams } from 'react-router-dom';
import FilmsData from '../Films';
import { Link } from 'react-router-dom';

const Details = ()=> {
    const {id} = useParams();
    const movies = FilmsData;
    const movie = movies.filter((movie)=> movie.imdbID === id);

    return(
        <div>
            <p>Genre: {movie[0].Genre}</p>
            <p>Actors: {movie[0].Actors}</p>
            <p>Plot: {movie[0].Plot}</p>
            <Link to="/"><button>Go back</button></Link>
        </div>
    )
};

export default Details;