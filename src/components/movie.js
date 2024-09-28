import {useState, useEffect} from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';


function Movie({id,title, image, year, runtime, director}) {

  return (
        <div> 
          <Link to={`/detail/${id}`}>{title}</Link>
          <img src={image}/>
          <ul>
            <li>Year: {year}</li>
            <li>Runtime: {runtime}</li>
            <li>Director: {director}</li>
          </ul>
        </div>
  );
}

export default Movie;