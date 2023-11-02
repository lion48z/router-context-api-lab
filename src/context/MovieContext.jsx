import { createContext, useState, useContext } from 'react'

const MovieContext = createContext();
const MovieProvider = ({ children }) =>{
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 

  return (
    <MovieContext.Provider value={{ searchInput, setSearchInput, searchResults }}>
    {children}
  </MovieContext.Provider>
  )
}

export default MovieContext
