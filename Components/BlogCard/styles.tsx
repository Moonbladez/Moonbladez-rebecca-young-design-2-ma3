import styled from "styled-components";

export const Card = styled.figure`
  max-width: 30%;
  color: var(--color-light-grey);
  margin-bottom: 2rem;
`;

export const Image = styled.div`
  width: auto;

  img {
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const Content = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;

  h4 {
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: var(--color-text);
  }

  span {
    color: var(--color-primary);
    font-size: 1.1rem;
    font-family: var(--font-styled);
    font-style: italic;
    margin-bottom: 1rem;
    display: inline-block;
  }

  a {
    color: var(--color-primary);
    font-family: var(--font-styled);
    font-style: italic;
    margin-top: 1rem;
    display: inline-block;

    &:hover {
      color: var(--color-text);
    }
  }
`;

export const Price = styled.div`
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1rem;
`;
