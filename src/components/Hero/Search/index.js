import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'
import Suggestion from './Suggestion'
import axios from 'axios'

const Search = ({ placeholder, type }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [search, setSearch] = useState('')
    const [isdisplay, setDisplay] = useState(false);
    const [products, setProducts] = useState([])
    const wrapperRef = useRef(null);

    // termékek beolvasása
    async  function fetchProducts() {
        await axios
            .get("../data/products.json")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.log(error));
    }
    // kosáron kívül való kattintás eseményfigyelő hozzáadása
    useEffect(() => {
        fetchProducts();
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line
    }, [])
    
    // input változás kezelése, ajánlatok tömb feltöltése az input alapján
    const onTextChange = (e) => {
        const value = e.target.value;
        if (value.length > 0) {
          const regex = new RegExp(`^${value}`, "i");
          setSuggestions(products.sort().filter((v) => regex.test(v.name)));
        }
        setSearch(value);
      };

    // 
    const suggestionChanged = (value) => {
        if (suggestions.length > 1) {
        setSearch(value.name);
        setSuggestions([]);
        setDisplay(false);
        }
        setDisplay(false);
    };

    // külső kattintás kezelése
    const handleClickOutside = (e) => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(e.target)) {
            setDisplay(false);
        }
    };
    
    return (
        <>
            <div className='search-wrapper'>
                <div className='search'>
                    <div className='search-container'>
                        <input
                            value={search}
                            type={type}
                            onChange={onTextChange}
                            onClick={() => setDisplay(true)}
                            placeholder={placeholder}
                            className='search-input'
                         />
                        <Link 
                            to={`/products`}
                            className='search-btn'>
                            <IoMdSearch className='search-icon'/>
                        </Link>
                    </div>
                </div>
                <div className='suggestion' ref={wrapperRef}>
                    <Suggestion
                        suggestions={suggestions}
                        suggestionChanged={suggestionChanged}
                        display={isdisplay}
                    />
                </div>
            </div>
           
        </>
    )
}

export default Search
