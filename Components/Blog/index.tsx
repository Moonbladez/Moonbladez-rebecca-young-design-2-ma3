import { BlogBackground, BlogWrapper } from "./styles";
import { BlogCard } from "./../BlogCard";

export const Blog = () => {
  return (
    <BlogBackground>
      <BlogWrapper>
        <BlogCard
          title="Etiam id ligula faucibus, lacinia diam sit amet, tincidunt augue."
          date="January 1st, 2021"
          description="Cras arcu mauris, ultrices ut magna vel, dictum pulvinar mi. Duis dictum pellentesque eros, ac sagittis arcu hendrerit vel. Etiam."
          id="1"
          alt="alt text"
        />
        <BlogCard
          title="Morbi porttitor ligula vel luctus luctus. In quis tortor nisi. Fusce a."
          date="January 11st, 2021"
          description="Cras ac tincidunt augue. Ut malesuada est sed enim iaculis scelerisque. Praesent imperdiet volutpat volutpat. Donec in tristique."
          id="2"
          alt="alt text"
        />
        <BlogCard
          title="Sed vehicula iaculis odio, vel varius diam vestibulum vitae."
          date="February 1st, 2021"
          description="Curabitur scelerisque orci justo, sed egestas tortor accumsan eu. Sed elementum turpis ut cursus vestibulum. Orci varius natoque penatibus et magnis dis."
          id="3"
          alt="alt text"
        />
      </BlogWrapper>
    </BlogBackground>
  );
};
