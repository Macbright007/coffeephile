import React from 'react'
import { SearchContainer } from './styles'

const Search = ({onChange}) => {

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <SearchContainer>
        <input type='search' placeholder='search for coffee..' onChange={handleChange} />
    </SearchContainer>
  )
}

export default Search