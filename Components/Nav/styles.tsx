import styled from "styled-components";

export const Navbar = styled.nav`
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  height: 70%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NavLinks = styled.div`
  ul {
    display: flex;
    a {
      margin-right: 1rem;
      text-transform: uppercase;
      font-size: 0.8625rem;

      &::after {
        content: "";
        height: 5px;
        color: red;
        width: 2px;
      }

      &:hover,
      &:active,
      &:focus {
        color: var(--color-primary);
        outline: none;
      }
    }
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 1rem;
  }

  svg {
    color: var(--color-text);
    margin-right: 1rem;

    &:hover {
      color: var(--color-primary);
    }
  }
`;
