import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filterProducts, setFilterProducts] = useState(jsonData);
  const filterSearch = (namefilter) => {
    const filter = jsonData.filter((product) =>
      product.name.toLowerCase().includes(namefilter.toLowerCase())
    );
    setFilterProducts(filter);
    setProducts(filter);
  };
  const filterOnStock = () => {
    const onStock = filterProducts.filter((product) => {
      return product.inStock === true;
    });
    setProducts(onStock);
  };

  const filterOutStock = () => {
    const outStock = filterProducts.filter(() => {
      return filterProducts;
    });
    setProducts(outStock);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        filterSearch={filterSearch}
        filterOnStock={filterOnStock}
        filterOutStock={filterOutStock}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
