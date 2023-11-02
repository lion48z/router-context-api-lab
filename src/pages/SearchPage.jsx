import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MovieProvider from '../context/MovieContext';
const SearchPage = () => {
  return (
    <div>
      <MovieProvider>
      <SearchBar/>
      {/*<MovieList/>*/}
      </MovieProvider>
      <Outlet/>
    </div>
  )
}

export default SearchPage
