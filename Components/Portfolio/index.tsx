import { PortfolioCard } from "./../PortfolioCard";
import { PortfolioWrapper } from "./styles";

export const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioCard title="Portfolio 1" subtitle="section" id={1} />
      <PortfolioCard title="Portfolio 2" subtitle="section" id={2} />

      <PortfolioCard title="Portfolio 3" subtitle="section" id={3} />

      <PortfolioCard title="Portfolio 4" subtitle="section" id={4} />

      <PortfolioCard title="Portfolio 5" subtitle="section" id={5} />

      <PortfolioCard title="Portfolio 6" subtitle="section" id={6} />

      <PortfolioCard title="Portfolio 7" subtitle="section" id={7} />

      <PortfolioCard title="Portfolio 8" subtitle="section" id={8} />
    </PortfolioWrapper>
  );
};
