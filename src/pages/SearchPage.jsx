import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
const SearchPage = () => {
  return (
    <div>
      <SearchBar/>
      {/*<MovieList/>*/}
      <Outlet/>
    </div>
  )
}

export default SearchPage
