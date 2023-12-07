import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((one) => {
            return <ProductRow one={one} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
