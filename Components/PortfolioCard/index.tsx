import { FC } from "react";
import { Content, Overlay, ContentDetails } from "./styles";

interface PortfolioCardProps {
  id: number;
  title: string;
  subtitle: string;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({ subtitle, title, id }) => {
  return (
    <Content>
      <Overlay className="overlay" />
      <img src={`/images/portfolio-${id}.jpg`} alt={title} />
      <ContentDetails className="content-details">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </ContentDetails>
    </Content>
  );
};
