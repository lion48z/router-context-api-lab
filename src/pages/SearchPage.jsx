import React from 'react'
import { Outlet } from 'react-router-dom'

const SearchPage = () => {
  return (
    <div>
       {/*<SearchBar/>*/}
      {/*<MovieList/>*/}
      <Outlet/>
    </div>
  )
}

export default SearchPage
