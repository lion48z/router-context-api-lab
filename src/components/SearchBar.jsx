// Importing necessary modules and components from React, services, and context
import React, { useContext, useState } from "react";
import { fetchMovies } from "../services/api";
import { MovieContext } from "../MovieContext";

// Importing components from react-bootstrap
import { Form, Button } from 'react-bootstrap';

// Functional component for the search bar
const SearchBar = () => {
  // Destructuring the dispatch function from MovieContext
  const { dispatch } = useContext(MovieContext);

  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle the search when the form is submitted
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      // Convert the search term to lowercase for case-insensitive search
      const lowercaseSearchTerm = searchTerm.toLowerCase();

      // Fetch movies based on the search term using the fetchMovies function
      const movies = await fetchMovies(lowercaseSearchTerm);

      // Dispatch an action to update the movies in the context
      dispatch({ type: "SET_MOVIES", payload: movies });

      // Clear the search term after a successful search
      setSearchTerm("");
    } catch (error) {
      // Log an error message if there's an error during the search
      console.error("Error searching for movies:", error);
    }
  }

  // Render the search bar using the Form and Button components from react-bootstrap
  return (
    <Form>
      <Form.Group>
        {/* Input field for the search term */}
        <Form.Control
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term on input change
        />
      </Form.Group>

      {/* Button to trigger the search when clicked */}
      <Button variant="primary" onClick={handleSearch} type="submit">
        Search
      </Button>
    </Form>
  );
};

// Export the SearchBar component as the default export
export default SearchBar;


