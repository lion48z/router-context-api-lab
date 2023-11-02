import axios from 'axios';
//import { useState } from'react';
// const axios= require("axios") for testing purposes 

//set up BASE_URL and API_KEY variables here
const API_KEY=process.env.REACT_APP_API_KEY;


const fetchMovies = async (searchString) => {
  const BASE_URL = `http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`;

  
  try {
    console.log("Fetching movies with searchTerm:", searchString);
    const response = await axios.get(BASE_URL);
   
    console.log("Fetched movies:", response.data.Search);
    return response.data.Search

  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const fetchMovieById = async (id) => {
  const BASE_URL = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}



export { fetchMovies, fetchMovieById };