import styled from "styled-components";

export const CTABackground = styled.div`
  background-color: whitesmoke;
  background-image: url("./images/cta-background.jpg");
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CTAWrapper = styled.section`
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  h2 {
    color: var(--color-text);
    font-family: var(--font-cta);
    letter-spacing: 0.15rem;
    text-align: left;
    line-height: 4rem;
  }
`;
