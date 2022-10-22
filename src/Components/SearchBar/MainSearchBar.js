import { useState } from "react";

function SearchBar(items) {
  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setSearch(value);
    items.search(value);
  }

  return (
    <div className="bg-light">
      <input
        value={search}
        onChange={handleInputChange}
        type="text"
        placeholder="Search by title"
        className="form-control me-4"
      />
    </div>
  );
}

export default SearchBar;
