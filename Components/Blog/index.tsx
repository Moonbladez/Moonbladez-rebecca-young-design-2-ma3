import { BlogBackground, BlogWrapper } from "./styles";
import { BlogCard } from "./../BlogCard";

export const Blog = () => {
  return (
    <BlogBackground>
      <BlogWrapper>
        <BlogCard
          title="Finding treasures at the thrift store"
          date="January 1st, 2021"
          description="Find hints and tips on scoring the best stuff at thrift stores"
          id="1"
          alt="alt text"
        />
        <BlogCard
          title="Vintage Nightstand makeover"
          date="January 11st, 2021"
          description="Turning a boring nightstand into a shabby chic treasure"
          id="2"
          alt="alt text"
        />
        <BlogCard
          title="A Simple Shabby Chic valentines table display"
          date="February 1st, 2021"
          description="A romantic, neutral based table display to impress the one you love"
          id="3"
          alt="alt text"
        />
      </BlogWrapper>
    </BlogBackground>
  );
};
