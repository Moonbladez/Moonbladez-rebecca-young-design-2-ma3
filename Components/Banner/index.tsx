import Image from "next/image";

import { BannerWrapper, BannerBox, BannerTitle } from "./styles";

export const Banner = (props: { image?: string }): JSX.Element => {
  return (
    <BannerWrapper>
      <img src={props.image ? props.image : "/images/home-banner.jpg"} width={1200} height={700} alt="Trend House" />
      <BannerBox>
        <BannerTitle>Trendy House</BannerTitle>
        <p>for your Home Sweet Home</p>
      </BannerBox>
    </BannerWrapper>
  );
};
