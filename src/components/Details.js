import { useParams } from 'react-router-dom';
import FilmsData from '../Films';

const Details = ()=> {
    const {id} = useParams();
    console.log(id);
    const movies = FilmsData;
    const movie = movies.filter((movie)=> movie.imdbID === id);
    console.log(movie[0]);
    return(
        <div>
            <p>Genre: {movie[0].Genre}</p>
            <p>Actors: {movie[0].Actors}</p>
            <p>Plot: {movie[0].Plot}</p>
        </div>
    )
};

export default Details;