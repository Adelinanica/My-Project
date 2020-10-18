import React from 'react'

const Search = ({searchfield,searchChange}) => {
    return (
        <div className="Search" >
  
        <input
         type="search"
        placeholder="search "
        onChange={searchChange}
           />       
          </div>
    )

    
}
export default Search