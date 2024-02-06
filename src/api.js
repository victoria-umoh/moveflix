import axios from 'axios';

const BASE_URL = "http://127.0.0.1:8000/api"; // Replace with your Laravel backend URL

const api = axios.create({
    baseURL: BASE_URL,
});

export const getAllMovies = () => {
    return api.get('/getmovies');
};

