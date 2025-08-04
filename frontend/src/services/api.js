require('dotenv').config(); // Load .env variables

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movies?popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (qurey) => {
    const response = await fetch(`${BASE_URL}/movies?popular?api_key=${encodeURIComponent(
        qurey
    )}`);
    const data = await response.json();
    return data.results;
};