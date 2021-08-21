import styled from "styled-components";

export const BannerWrapper = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  img {
    /* object-fit: cover; */
    width: 100%;
    object-position: center;
    filter: contrast(50%);
  }
`;

export const BannerBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  width: 20%;
  height: 90%;
  position: absolute;
  right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0 2rem; ;
`;

export const BannerTitle = styled.h1`
  color: var(--color-primary);
  font-family: var(--font-styled);
  font-size: 3rem;
  font-style: italic;
  margin-bottom: 1rem;
`;
