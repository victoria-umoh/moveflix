// Your React component
import React, { useState, useEffect } from 'react';
import AppURL from '../../api/AppURL';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(AppURL.GetMovies); // Assuming GetMovies endpoint fetches the movies data
                setMovies(response?.data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    console.log(movies);
    return (
        <div>
            <h2>Popular Movies</h2>
            <ul>
                {movies && movies?.production_companies?.map(movie => (
                    <li key={movie?.id}>
                        <h3>{movie?.name}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.logo_path}`} alt={movie?.name} />
                        <p>{movie?.overview}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
