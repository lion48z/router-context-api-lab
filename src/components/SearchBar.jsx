import React, { useContext, useState } from "react";
import { fetchMovies } from "../services/api"; // Import fetchMovies
import { MovieContext } from "../MovieContext";

import  {Form, Button } from 'react-bootstrap';

const SearchBar = () => {
  const { dispatch } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const movies = await fetchMovies(lowercaseSearchTerm); 
      dispatch({ type: "SET_MOVIES", payload: movies });
      setSearchTerm(""); 
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  }

  return (
    <Form>
      <Form.Group>
      <Form.Control
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      </Form.Group>
      
      <Button variant="primary" onClick={handleSearch} type="submit">
        Search
      </Button>
    
      
      </Form>
  );
};

export default SearchBar;

