
// Your React component
import React, { useState, useEffect } from 'react';
import { getAllMovies } from './api'; // Import your API functions


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('/getmovies');
            const data = await response.json();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Popular Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;