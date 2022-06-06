import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");


  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  let itemsToDisplay = items.filter((item)=> {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory
  })

  itemsToDisplay = itemsToDisplay.filter((item) => {
    return (item.name.toLowerCase().includes(search.toLowerCase()))
  })

  function handleSearch(event){
    setSearch(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItem} />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={search}
      onSearchChange={handleSearch}
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
