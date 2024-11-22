import React from "react";

const VisionBuddies = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter a buddy's name"
            id="searchInput"
          />
          <button id="addButton" className="action-btn add-btn">
            Add
          </button>
        </div>
        <div className="buddy-list" id="buddyList"></div>
      </div>

      <div className="right-section">
        <h3>Following</h3>
        <ul className="following-list" id="followingList"></ul>
      </div>
    </div>
  );
};

export default VisionBuddies;
