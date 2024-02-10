import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from '../../axios';
// import axios from 'axios';

const base_url = "https://image.tmbd.org/t/p/original/";

function Rows({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results); // Assuming the movie data is in `results` property of the response
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [fetchUrl]); // Included fetchUrl in dependency array to re-run effect when it changes

  console.table(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={`${base_url}${movie.poster_path}`} 
            alt={movie.name}
            className="img-fluid" />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rows;
