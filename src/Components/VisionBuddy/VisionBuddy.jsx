import React, { useState } from "react";


const VisionBuddies = () => {
  const [buddies, setBuddies] = useState([]);
  const [following, setFollowing] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue && !buddies.includes(inputValue)) {
      setBuddies([...buddies, inputValue]);
      setInputValue("");
    }
  };

  const handleFollow = (buddy) => {
    if (!following.includes(buddy)) {
      setFollowing([...following, buddy]);
    }
  };

  const handleRemove = (buddy) => {
    setBuddies(buddies.filter((b) => b !== buddy));
    setFollowing(following.filter((f) => f !== buddy));
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter a buddy's name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAdd} className="action-btn add-btn">
            Add
          </button>
        </div>
        <div className="buddy-list">
          {buddies.map((buddy, index) => (
            <div key={index} className="friend-item">
              <p>{buddy}</p>
              <div>
                <button
                  onClick={() => handleFollow(buddy)}
                  className="action-btn follow-btn"
                >
                  Follow
                </button>
                <button
                  onClick={() => handleRemove(buddy)}
                  className="action-btn remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <h3>Following</h3>
        <ul className="following-list">
          {following.map((follower, index) => (
            <li key={index}>{follower}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VisionBuddies;
