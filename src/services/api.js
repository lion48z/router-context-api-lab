import axios from 'axios';
// const axios= require("axios") for testing purposes 

//set up BASE_URL and API_KEY variables here
const BASE_URL ="http://www.omdbapi.com/?"
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
    
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}

//fetchMovieById("Batman")

export { fetchMovies, fetchMovieById };