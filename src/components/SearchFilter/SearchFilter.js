import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = () => {
  // State for the list of items and search query
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newItem, setNewItem] = useState('');

  // Add a new item to the list
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  // Filtered items based on the search query
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-container">
      <h3>Dynamic List with Search</h3>

      {/* Input to add new items */}
      <div className="add-item-container">
        <input
          type="text"
          placeholder="Add a new item..."
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          className="add-item-input"
        />
        <button onClick={addItem} className="add-item-button">
          Add
        </button>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Display the filtered list */}
      <ul className="search-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="search-item">
            {item}
          </li>
        ))}
        {filteredItems.length === 0 && <li className="no-results">No items found</li>}
      </ul>
    </div>
  );
};

export default SearchFilter;
