import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const SearchPage = () => {
  return (
    <div>
    
       <SearchBar/> 
       <MovieList/>
      
      <Outlet />
    </div>
  );
};

export default SearchPage;
