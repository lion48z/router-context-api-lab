import { createContext, useState } from 'react';

const MovieContext = createContext();
const MovieProvider = ({ children }) =>{
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([])
  return (
    <MovieContext.Provider value={{ searchInput, setSearchInput, searchResults}}>
      {children}
    </MovieContext.Provider>
  );
}

export { MovieContext, MovieProvider as defaultMovie };