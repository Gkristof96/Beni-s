import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'

const Search = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <div className='search'>
                <div className='search__container'>
                    <input className='search__input'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Keres az édességek között!'
                    >
                    </input>
                    <button className='search__btn'><IoMdSearch className='search__icon'/></button>
                </div>
            </div>
        </>
    )
}

export default Search
