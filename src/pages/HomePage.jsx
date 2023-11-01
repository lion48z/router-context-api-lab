import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar';
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Blockbuster Online</h1>
      <SearchBar/>
      <Outlet/>
    </div>
  )
}

export default HomePage
