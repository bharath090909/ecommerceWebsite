import React from "react";

const FilterBy = (props) => {
  const cateogryArr = ["all"];
  props.products.filter((item) => {
    if (!cateogryArr.includes(item.category)) {
      cateogryArr.push(item.category);
      return true;
    }
    return false;
  });
  return (
    <>
      {cateogryArr.map((item, index) => {
        return (
          <button
            id={item}
            key={index}
            className={`border-2 p-2 rounded-2xl ${
              item === props.category ? `border-blue-400 text-blue-400` : ``
            }`}
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </>
  );
};

export default FilterBy;
