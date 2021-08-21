import { AboutWrapper, CardWrapper } from "./styles";
import { AboutCard } from "./../AboutCard";

import { GiFlowerPot } from "react-icons/gi";
import { AiOutlineFormatPainter, AiOutlineSketch } from "react-icons/ai";

export const About = () => {
  return (
    <AboutWrapper>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque facilisis mauris id lacinia. Praesent
        tempor eros quam, ac mollis neque vulputate quis. Nunc rhoncus cursus ex eu ultricies. Aenean sit amet commodo
        quam. Nunc eu nibh non orci porta blandit. Integer et posuere ipsum. Aenean bibendum placerat felis. Sed vel
        sapien odio. Donec elementum finibus pharetra. Aliquam ac faucibus felis.
      </p>
      <CardWrapper>
        <AboutCard
          title="Title One"
          description="No, you can't close the door, i haven't decided whether or not i wanna go out lick butt "
          Icon={<GiFlowerPot />}
        />
        <AboutCard
          title="Title Two"
          description="Sleep over your phone and make cute snoring noises my slave human didn't give me any food "
          Icon={<AiOutlineFormatPainter />}
        />
        <AboutCard title="Title Three" description="Eat half my food and ask for more " Icon={<AiOutlineSketch />} />
      </CardWrapper>
    </AboutWrapper>
  );
};
