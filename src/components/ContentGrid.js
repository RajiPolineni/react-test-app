import React from "react";

const ContentGrid = ({ items }) => {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div key={index} className="grid-item">
          <img src={`https://test.create.diagnal.com/images/${item['poster-image']}`} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
