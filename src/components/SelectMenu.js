import React from "react";

const SelectMenu = ({ options, handleOptionChange, menuSelected }) => {
  return (
    <div>
      <select
        value={menuSelected}
        onChange={handleOptionChange}
        className="menu"
      >
        <option value="">Select Coffee Type</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
