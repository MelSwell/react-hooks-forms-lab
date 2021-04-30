import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ 
  handleFormNameChange, 
  nameInput, 
  selectedCategory, 
  handleCategoryChange, 
  items, 
  setItems, 
  setNameInput 
}) {

  function handleFormSubmit(event){
    event.preventDefault()
    const newItem = {
      name: nameInput.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}),
      category: selectedCategory,
      id: uuid()
    }
    addItem(newItem)
    setNameInput("")
  }

  function addItem(newItem) {
    setItems([...items, newItem])
  }

  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={nameInput} 
          onChange={handleFormNameChange} 
        />
      </label>

      <label>
        Category:
        <select value={selectedCategory} onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
