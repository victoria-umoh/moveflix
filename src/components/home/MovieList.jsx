import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import Banner from './Banner';

// const base_originals = "https://image.tmbd.org/t/p/original/";
// const base_trending = "https://image.tmbd.org/t/p/trending/";

const MovieList = () => {
    // const [movies, setMovies] = useState([]);
    const [netflixOriginals, setNetflixOriginals] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [romanceMovies, setRomanceMovies] = useState([]);
    const [documentariesMovies, setDocumentary] = useState([]);


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

    const fetchTopRatedMovies = async () => {
        try {
            const response = await axios.get(AppURL.TopRated);
            setTopRatedMovies(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching Top Rated Movies:', error);
        }
    };

    const fetchActionMovies = async () => {
        try {
            const response = await axios.get(AppURL.Action);
            setActionMovies(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching Action Movies:', error);
        }
    };
    const fetchComedyMovies = async () => {
        try {
            const response = await axios.get(AppURL.Comedy);
            setComedyMovies(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching Comedy Movies:', error);
        }
    };
    const fetchHorrorMovies = async () => {
        try {
            const response = await axios.get(AppURL.Horror);
            setHorrorMovies(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching Horror Movies:', error);
        }
    };
    const fetchRomanceMovies = async () => {
        try {
            const response = await axios.get(AppURL.Romance);
            setRomanceMovies(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching Romance Movies:', error);
        }
    };
    const fetchDocumentaries = async () => {
        try {
            const response = await axios.get(AppURL.Documentary);
            setDocumentary(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching Documentaries:', error);
        }
    };
    
    useEffect(() => {
        fetchNetflixOriginals();
        fetchTrendingMovies();
        fetchTopRatedMovies();
        fetchActionMovies();
        fetchComedyMovies();
        fetchHorrorMovies();
        fetchRomanceMovies();
        fetchDocumentaries();
    }, []);
    
    console.table(setNetflixOriginals);
    return (
        <div>
            <Banner />
            <Container fluid>
                
            <h2 className='text-center'>Netflix Originals</h2>
            <div className="row">
                <div className="row__posters">
                    {netflixOriginals.map(movie => (
                        <img key={movie.id} 
                        // src={`${base_originals}${movie.poster_path}`} 
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
                    <h2 className='text-center'>Trending</h2>
                    <div className="row">
                        <div className="row__posters">
                            {trendingMovies.map(movie => (
                                <img key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.name} className='row__poster' />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="">
                    <h2 className='text-center'>Top Rated</h2>
                    <div className="row">
                        <div className="row__posters">
                            {topRatedMovies.map(movie => (
                                <img key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.name} className='row__poster' />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-center'>Action</h2>
                    <div className="row">
                        <div className="row__posters">
                            {actionMovies.map(movie => (
                                <img key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.name} className='row__poster' />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-center'>Comedy</h2>
                    <div className="row">
                        <div className="row__posters">
                            {comedyMovies.map(movie => (
                                <img key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.name} className='row__poster' />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-center'>Horror</h2>
                    <div className="row">
                        <div className="row__posters">
                            {comedyMovies.map(movie => (
                                <img key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.name} className='row__poster' />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-center'>Romance</h2>
                    <div className="row">
                        <div className="row__posters">
                            {romanceMovies.map(movie => (
                                <img key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.name} className='row__poster' />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-center'>Documentary</h2>
                    <div className="row">
                        <div className="row__posters">
                            {documentariesMovies.map(movie => (
                                <img key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.name} className='row__poster' />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
                  
    );
};

export default MovieList;
