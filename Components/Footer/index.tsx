import { Copyright, SocialIcons } from "./styles";
import { RiFacebookCircleLine, RiTwitterLine, RiPinterestLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer>
      <SocialIcons>
        <RiFacebookCircleLine />
        <RiTwitterLine />
        <RiPinterestLine />
      </SocialIcons>
      <Copyright>© Bulu Designs {new Date().getFullYear()}</Copyright>
    </footer>
  );
};
