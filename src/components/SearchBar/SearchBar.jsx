import React, { useEffect, useState } from 'react'

const SearchBar = ({ searchFunction, setResultArray, setIsLoading }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const search = async (event) => {
    setSearchQuery(event.target.value)

    if (searchQuery.length > 2) {
      setIsLoading(true)
      const array = await searchFunction(searchQuery)
        .then(result => {
          if (Array.isArray(result) && result.length > 0) {
            return result
          } else {
            return []
          }
        })
        .catch(error => console.log(error))

      setResultArray(array)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (searchQuery.length === 0) {
      setResultArray([])
    }
  }, [searchQuery])

  return (
    <div className='search-bar-container'>
      <label className='search-bar__label'>
        <input className='search-bar__input' type='text' value={searchQuery} onChange={search} placeholder='Search' />
      </label>
    </div>
  )
}

export default SearchBar