import { FC } from "react";
import { Card } from "./styles";

interface AboutCardProps {
  Icon: JSX.Element;
  title: string;
  description: string;
}

export const AboutCard: FC<AboutCardProps> = ({ Icon, title, description }) => {
  return (
    <Card>
      <div>{Icon}</div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </Card>
  );
};
