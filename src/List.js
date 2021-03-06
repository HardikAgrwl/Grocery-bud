import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ id, title, removeItem, editItem }) => {
  return (
    <article className="grocery-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button
          type="button"
          className="edit-btn"
          onClick={() => editItem(id, title)}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
