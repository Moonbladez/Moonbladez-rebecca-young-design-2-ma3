import { Card, Image, Content } from "./styles";

export const BlogCard = ({ title, date, description, id, alt }) => {
  return (
    <Card>
      <Image>
        <img src={`/images/blog-${id}.jpg`} alt={alt} />
      </Image>
      <Content>
        <span>{date}</span>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="">Read More</a>
      </Content>
    </Card>
  );
};
