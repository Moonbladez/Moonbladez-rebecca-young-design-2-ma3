import styled from "styled-components";

export const SocialIcons = styled.div`
  background-color: var(--color-text);
  color: var(--color-light-grey);
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: var(--color-primary);
    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
    }

    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;

export const Copyright = styled.div`
  background-color: #333333;
  text-align: center;
  padding: 1rem;
  color: var(--color-light-grey);
  font-style: italic;
`;
