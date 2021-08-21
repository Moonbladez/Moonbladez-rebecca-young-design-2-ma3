import { FC } from "react";
import { Card, Image, Content, Price } from "./../BlogCard/styles";

interface ProductCardProps {
  product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <Image>
        <img src={product.imgUrl} alt={product.name} />
      </Image>
      <Content>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <Price>
          <div>£ {product.price}</div>
        </Price>
      </Content>
    </Card>
  );
};
