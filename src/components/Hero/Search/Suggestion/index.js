import React, { useContext } from 'react'
import CartContext from '../../../../contexts/cartContext';
import { Link } from 'react-router-dom'

const Suggestion = ({ suggestions, suggestionChanged, display }) => {
  const {addItem} = useContext(CartContext)
  if (suggestions.length === 0) {
    return null;
  }
  // const {addItem} = useContext(TestContext);
  return (
    <>
      {display ? (
        <ul>
          {suggestions.map((item, i) => (
            <li key={i} onClick={() => suggestionChanged(item)}>
              <Link to={`/product?product=${item.id}`}>
                <img src={item.image} alt={item.name}/>
                <h1 className='product-title'>{item.name}</h1>
                <div className='price-wrapper'>
                  <h1 className='disconted-price'>{item.discontedprice} Ft/db</h1>
                  <h1 className='price'>{item.price} Ft/db</h1>
                </div>
              </Link>
              <button 
                className='btn'
                onClick={() => addItem(item,1)}
              >kosárba rakom
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Suggestion;
