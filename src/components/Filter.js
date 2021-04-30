import React from "react";

function Filter({ selectedCategory, onCategoryChange, handleSearchChange, searchInput }) {
  return (
    <div className="Filter">
      <input type="text" name="search" onChange={handleSearchChange} value={searchInput} placeholder="Search..." />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
