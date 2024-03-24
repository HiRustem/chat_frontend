import React, { useState } from 'react'
import { searchFunction } from '../UserInterface/helpers/userInterfaceFunctions'

const SearchBar = ({ setResultArray, setIsLoading }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const search = async (event) => {
    const { value } = event.target

    setSearchQuery(value)

    if (value.length > 2) {
      setIsLoading(true)

      await searchFunction(value, setResultArray)

      setIsLoading(false)
    }

    if (value.length === 0) {
      setResultArray([])
    }
  }

  return (
    <div className='search-bar-container'>
      <label className='search-bar__label'>
        <input className='search-bar__input' type='text' value={searchQuery} onChange={search} placeholder='Search' />
      </label>
    </div>
  )
}

export default SearchBar