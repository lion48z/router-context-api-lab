import axios from 'axios';
// const axios= require("axios") for testing purposes 

//set up BASE_URL and API_KEY variables here
const BASE_URL="http://www.omdbapi.com/"
const API_KEY=process.env.REACT_APP_API_KEY
const fetchMovies = async (searchTerm) => {
  try {
    //your code here

  } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
  }
};

const fetchMovieById = async (id) => {
  try {
    //your code here
   const response = await axios.get(BASE_URL);
   return response.data.results[0]; 
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}

fetchMovieById("Batman") //for testing 

export { fetchMovies, fetchMovieById };