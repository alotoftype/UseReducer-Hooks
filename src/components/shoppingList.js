import React, { useReducer, useRef } from "react";

export const ShoppingList = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    console.log;
    inputRef.current.value = "";
  }
  return (
    <>
      <ul>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} />
        </form>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
export default ShoppingList;
