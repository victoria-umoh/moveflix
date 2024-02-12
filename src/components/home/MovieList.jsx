import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import Banner from './Banner';

const base_originals = "https://image.tmbd.org/t/p/original/";
const base_trending = "https://image.tmbd.org/t/p/trending/";

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
    
    console.table(setNetflixOriginals);
    return (
        <div>
            <Banner />
            <Container fluid>
                
            <h2>Netflix Originals</h2>
            <div className="row">
                <div className="row__posters">
                {netflixOriginals.map(movie => (
                    <img key={movie.id} src={`${base_originals}${movie.poster_path}`} 
                    alt={movie.name} className='row__poster' />
                ))}
                </div>
            </div>
                {/* {netflixOriginals.map(movie => (
                    <Row key={movie.id}>
                        <Col>
                            <div className="movie-card mb-5">
                                <img src={movie?.backdrop_path} alt="" />
                                <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                                <h3>{movie.name}</h3>
                                <div className='d-flex'> 
                                    <span>{movie.first_air_date}</span> &nbsp; &nbsp;
                                    <span>Vote count: {movie.vote_count}</span>
                                </div>  
                            </div>
                        </Col>
                    </Row>
                ))} */}

                <div className="">
                <h2>Trending</h2>
                <div className="movie-list">
                    {netflixOriginals.map(movie => (
                        <div key={movie.id} className="movie-card">
                        <img src={`${base_trending}${movie?.poster_path}`} alt={movie.title} />
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            <div className='d-flex'> 
                                <span>{movie.first_air_date}</span> &nbsp; &nbsp;
                                <span>Vote count: {movie.vote_count}</span>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                </div>
            </Container>
        </div>
                  
    );
};

export default MovieList;
