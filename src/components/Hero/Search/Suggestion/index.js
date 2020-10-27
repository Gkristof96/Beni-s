import React, { useContext } from 'react'
import TestContext from '../../../textContext';

const Suggestion = ({ suggestions, suggestionChanged, display }) => {
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
              <img src={item.image} alt={item.name}/>
              <h1 className='suggestion-name'>{item.name}</h1>
              <div className='price-wrapper'>
                <h1 className='disconted-price'>{item.discontedprice} Ft/db</h1>
                <h1 className='price'>{item.price} Ft/db</h1>
              </div>
                  
                  
              <button className='btn'>kosárba rakom</button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Suggestion;
