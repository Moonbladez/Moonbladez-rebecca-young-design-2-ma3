import styled from "styled-components";

export const Card = styled.div`
  max-width: 30%;
  h3 {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    margin-bottom: 1rem;
  }
  svg {
    color: var(--color-primary);
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-light-grey);
    font-weight: 300;
  }
`;
