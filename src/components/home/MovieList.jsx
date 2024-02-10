import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';

const base_url = "https://image.tmbd.org/t/p/original/";
const MovieList = () => {
    // const [movies, setMovies] = useState([]);
    const [netflixOriginals, setNetflixOriginals] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);


    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         try {
    //             const response = await axios.get(AppURL.GetMovies); // Assuming GetMovies endpoint fetches the movies data
    //             setMovies(response?.data);
    //             // const data = await response.data;
    //             // console.log(data);
    //         } catch (error) {
    //             console.error('Error fetching movies:', error);
    //         }
    //     };

    //     fetchMovies();
    // }, []);
    const fetchNetflixOriginals = async () => {
        try {
            const response = await axios.get(AppURL.NetflixOriginals);
            setNetflixOriginals(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchTrendingMovies = async () => {
        try {
            const response = await axios.get(AppURL.Trending);
            setTrendingMovies(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching Trending Movies:', error);
        }
    };
    
    useEffect(() => {
        fetchNetflixOriginals();
        fetchTrendingMovies();
    }, []);
    
    
    return (
        <div>
            <Container fluid>
            <h2>Netflix Originals</h2>
                {netflixOriginals.map(movie => (
                    <Row key={movie.id}>
                        <Col>
                            <div className="movie-card mb-5">
                                <img src={movie?.backdrop_path} alt="" />
                                <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                                <h3>{movie?.name}</h3>
                                <span>{movie.first_air_date}</span> &nbsp; &nbsp;
                                <span>vote count {movie.vote_count}</span>
                            </div>
                        </Col>
                    </Row>
                ))}

                <h2>Trending</h2>
                {netflixOriginals.map(movie => (
                    <Row key={movie.id}>
                        <Col>
                            <div className="movie-card mb-5">
                                <img src={movie?.backdrop_path} alt="" />
                                <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                                <h3>{movie?.name}</h3>
                                <span>{movie.first_air_date}</span> &nbsp; &nbsp;
                                <span>vote count {movie.vote_count}</span>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
                  
    );
};

export default MovieList;
