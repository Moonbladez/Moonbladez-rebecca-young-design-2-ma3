import { AboutWrapper, CardWrapper } from "./styles";
import { AboutCard } from "./../AboutCard";

import { GiFlowerPot } from "react-icons/gi";
import { AiOutlineFormatPainter, AiOutlineSketch } from "react-icons/ai";

export const About = () => {
  return (
    <AboutWrapper>
      <h2>About Us</h2>
      <p>
        The philosophy behind Trendy House has always been to provide furniture that will last forever, and stay a
        quality peice and aestheticaly pleasing the whole time.
      </p>
      <p>
        Trendy House has been around since 1905 and has been providing quality peices through generations of families
      </p>
      <CardWrapper>
        <AboutCard
          title="Decor"
          description="Our range of timeless peices to accessorize your house"
          Icon={<GiFlowerPot />}
        />
        <AboutCard
          title="Paint"
          description="No home is complete without a splashing of paint to show off the furniture"
          Icon={<AiOutlineFormatPainter />}
        />
        <AboutCard
          title="Furniture"
          description="Our selection of heirloom furniture peices that will be the talk of the neighbourhood"
          Icon={<AiOutlineSketch />}
        />
      </CardWrapper>
    </AboutWrapper>
  );
};
