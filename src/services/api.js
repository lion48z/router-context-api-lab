import axios from 'axios';

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

export { fetchMovies, fetchMovieById };