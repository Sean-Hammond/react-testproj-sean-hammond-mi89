import React from "react";

export const ToDoItem = ({ todo }) => {
  return (
    <div className="px-5 py-3 d-flex w-50 border">
      <h2>{todo}</h2>
      <h1 className="text-danger ms-auto"></h1>
    </div>
  );
};
