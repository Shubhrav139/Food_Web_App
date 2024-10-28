import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        <RestaurantCard />
      </div>
    </>
  );
};

export default Body;
