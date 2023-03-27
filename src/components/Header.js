import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/details">Details</Link>
      <Link to="/">List</Link>
    </nav>
  )
}

export default Header;