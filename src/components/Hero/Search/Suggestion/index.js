import React from "react";

const Suggestion = ({ suggestions, suggestionChanged, display }) => {
  if (suggestions.length === 0) {
    return null;
  }
  return (
    <>
      {display ? (
        <ul>
          {suggestions.map((item, i) => (
            <li key={i} onClick={() => suggestionChanged(item)}>
              <img src={item.image} />
              <h1>{item.name}</h1>
              <div>
                  <h1>{item.price}</h1>
                  <h1>{item.discontedprice}</h1>
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
