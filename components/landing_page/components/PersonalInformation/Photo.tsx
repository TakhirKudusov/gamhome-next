import Image from "next/image";
import VKSVG from "../../../../public/assets/svg/VKSVG";
import InstagramSVG from "../../../../public/assets/svg/InstagramSVG";
import TelegramSVG from "../../../../public/assets/svg/TelegramSVG";
import WhatsUpSVG from "../../../../public/assets/svg/WhatsUpSVG";
import styled from "styled-components";
import { BrandColor } from "../../../../common/enums";
import { FC, memo } from "react";

type Props = {
  className?: string;
};

const Photo: FC<Props> = ({ className }) => {
  return (
    <PhotoBlock className={className}>
      <ImageContainer />
      <SocialMediaLinksWrapper>
        <SocialMediaIconContainer
          target="_blank"
          href="https://vk.com/gamolin_evgeniy"
        >
          <VKSVG />
        </SocialMediaIconContainer>
        <SocialMediaIconContainer
          target="_blank"
          href="https://instagram.com/gamolin_evgeniy"
        >
          <InstagramSVG />
        </SocialMediaIconContainer>
        <SocialMediaIconContainer
          target="_blank"
          href="https://t.me/gamolin_evgeniy"
        >
          <TelegramSVG />
        </SocialMediaIconContainer>
        <SocialMediaIconContainer
          target="_blank"
          href="https://wa.me/79260211033"
        >
          <WhatsUpSVG />
        </SocialMediaIconContainer>
      </SocialMediaLinksWrapper>
    </PhotoBlock>
  );
};

const SocialMediaIconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    background: ${BrandColor.BRAND_12};
  }
  &:active {
    background: ${BrandColor.BRAND_16};
  }
`;

const SocialMediaLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    column-gap: 12px;
  }
`;

const ImageContainer = styled.div`
  width: 304px;
  height: 389.5px;
  background: url("/images/landing/personal_photo.webp") no-repeat;
  background-size: 304px;
  border-radius: 24px;
  @media screen and (max-width: 1439px) {
    width: 192px;
    height: 236px;
    background-size: 192px;
  }
  @media screen and (max-width: 1023px) {
    width: 208px;
    height: 255px;
    background-size: 208px;
    background-position: bottom left;
  }
`;

const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
  @media screen and (max-width: 1439px) {
    width: 214px;
  }
  @media screen and (max-width: 1023px) {
    width: 208px;
  }
`;

export default memo(Photo);
