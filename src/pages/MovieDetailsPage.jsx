import React from 'react'
import { Outlet } from 'react-router-dom'

const MovieDetailsPage = () => {
  return (
    <div>
      <h3>Movie Details</h3>
      {/*details of the movie, title, picture, actors, description, Make a card using mui??*/}
      <Outlet />
    </div>
  
  )
}

export default MovieDetailsPage
