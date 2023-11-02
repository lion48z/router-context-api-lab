import React from 'react'

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //getInfo();
  };
  return (
    <div>
    
    <input type="text" placeholder="Search for a movie" />
    <button type="submit">Search</button>
    </div>
  )
}

export default SearchBar

