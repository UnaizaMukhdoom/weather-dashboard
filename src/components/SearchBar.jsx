import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, placeholder }) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder || 'Search...'}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;