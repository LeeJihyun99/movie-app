import FilmsData from '../Films';
import Movie from './movie.js';
import {Link} from "react-router-dom";
import Details from './Details.js';

const Home = ()=> {
    const movies = FilmsData;
    return(
        <div>
            <h2>{movies.length} Movies</h2>
            {movies.map((movie)=>(
            <div> 
                <Movie id={movie.imdbID} title={movie.Title} image={movie.Images[0]} year={movie.Year} runtime={movie.Runtime} director = {movie.Director}/>
            </div>
            ))}
      </div>
    )
};
export default Home;