import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'
import Suggestion from './Suggestion'
import axios from 'axios'

const Search = ({ placeholder, type }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [search, setSearch] = useState('')
    const [display, setDisplay] = useState(false);
    const [products, setProducts] = useState([])

    async  function fetchProducts() {
        await axios
            .get("../data/products.json")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.log(error));
    }

    
    useEffect(() => {
        fetchProducts();
    }, [])

    const onTextChange = (e) => {
        const value = e.target.value;
        if (value.length > 0) {
          const regex = new RegExp(`^${value}`, "i");
          setSuggestions(products.sort().filter((v) => regex.test(v.name)));
        }
        setSearch(value);
      };

    const suggestionChanged = (value) => {
        if (suggestions.length > 1) {
        console.log(value)
        setSearch(value.name);
        setSuggestions([]);
        setDisplay(false);
        }
        setDisplay(false);
    };

    const wrapperRef = useRef(null);


    
    return (
        <>
            <div className='search-wrapper'>
                <div className='search'>
                    <div className='search__container'>
                        <input
                            value={search}
                            type={type}
                            onChange={onTextChange}
                            onClick={() => setDisplay(true)}
                            placeholder={placeholder}
                            className='search__input'
                         />
                        <Link 
                            to={`/products?product=${search}`} 
                            className='search__btn'>
                            <IoMdSearch className='search__icon'/>
                        </Link>
                    </div>
                </div>
                <div className='suggestion' ref={wrapperRef}>
                    <Suggestion
                        suggestions={suggestions}
                        suggestionChanged={suggestionChanged}
                        display={display}
                    />
                </div>
            </div>
           
        </>
    )
}

export default Search
