import Link from "next/link";
import { Navbar, NavLinks, NavIcons, LogoContainer } from "./styles";

export const Nav = (): JSX.Element => {
  return (
    <Navbar>
      <LogoContainer>
        <img src="images/logo.png" />
      </LogoContainer>
      <NavLinks>
        <ul>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/products">
            <a>
              <li>Products</li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li>About Us</li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li>Contact Us</li>
            </a>
          </Link>
        </ul>
      </NavLinks>
      <NavIcons>
        <img src="/icons/search.svg" alt="" aria-hidden="true" />
        <img src="/icons/shopping-basket.svg" alt="" aria-hidden="true" />
        <img src="/icons/menu.svg" alt="" aria-hidden="true" />
      </NavIcons>
    </Navbar>
  );
};
