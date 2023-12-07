import React from "react";

function ProductRow({ one }) {
  return (
    <tr key={one.id}>
      <td style={{ color: one.inStock === false && "red" }}>{one.name}</td>
      <td>{one.price}</td>
      <td>{one.category}</td>
    </tr>
  );
}

export default ProductRow;
