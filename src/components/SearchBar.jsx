import React from "react";

function SearchBar({ filterSearch, filterOnStock, filterOutStock }) {
  function handleChange(event) {
    filterSearch(event.target.value);
  }
  function handleOnStock(event) {
    if (event.target.checked) {
      filterOnStock();
    } else {
      filterOutStock();
    }
  }
  return (
    <>
      <input type="text" placeholder="search..." onChange={handleChange} />
      <br />
      <input type="checkbox" onChange={handleOnStock} />
      Only show products on stock;
    </>
  );
}

export default SearchBar;
