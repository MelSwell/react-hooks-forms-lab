import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedFilterCategory, setSelectedFilterCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("")
  const [nameInput, setNameInput] = useState("")
  const [selectedFormCategory, setSelectedFormCategory] = useState("Produce");

  function handleFormCategoryChange(event) {
    setSelectedFormCategory(event.target.value)
  }

  function handleFormNameChange(event) {
    setNameInput(event.target.value)
  }

  function handleFilterCategoryChange(event) {
    setSelectedFilterCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchInput(event.target.value)
  }

  const itemsBySearchTerm = items.filter((item) => {
    if (searchInput === "") return true

    return item.name.toLowerCase().includes(searchInput) 
  })

  const itemsToDisplay = itemsBySearchTerm.filter((item) => {
    if (selectedFilterCategory === "All") return true;

    return item.category === selectedFilterCategory 
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        selectedCategory={selectedFormCategory}
        handleCategoryChange={handleFormCategoryChange}
        handleFormNameChange={handleFormNameChange} 
        nameInput={nameInput}
        setNameInput={setNameInput}
        items={items}
        setItems={setItems}
      />
      <Filter 
        selectedCategory={selectedFilterCategory}
        searchInput={searchInput} 
        handleSearchChange={handleSearchChange} 
        onCategoryChange={handleFilterCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
