import { ProductListContainer, Products } from "./styles";
import { products } from "./../../utils/productList";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
  return (
    <ProductListContainer>
      <h2>Product List</h2>
      <Products>
        {products.map((product) => {
          return <ProductCard product={product} key={product.name} />;
        })}
      </Products>
    </ProductListContainer>
  );
};
