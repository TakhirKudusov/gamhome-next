import { FC, memo, useState } from "react";
import Image from "next/image";
import { ButtonSize, ButtonType } from "../../../UI/button/enums";
import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { CardProp } from "./types";
import Link from "next/link";
import { OtherColor } from "../../../../common/enums";

type Props = {
  cardData: CardProp;
};
const Card: FC<Props> = ({
  cardData: { link, imgSrc, imgAlt, descriptionShort, descriptionFull, header },
}) => {
  const [isDescFull, setIsDescFull] = useState<boolean>(false);

  const handleAddClick = () => {
    setIsDescFull(true);
  };

  return (
    <CardWrapper>
      <Link href={"#" + link} scroll={false}>
        <ImageContainer src={imgSrc} />
      </Link>
      <CardInformationContainer>
        <CardHeader>{header}</CardHeader>
        {descriptionShort && !isDescFull ? (
          <CardDesc>
            {descriptionShort}
            <DeployDescBtn onClick={handleAddClick}>Еще</DeployDescBtn>
          </CardDesc>
        ) : (
          <CardDesc>{descriptionFull}</CardDesc>
        )}
        <Link href={"#" + link} scroll={false}>
          <ScrollLink>Подробнее</ScrollLink>
        </Link>
      </CardInformationContainer>
    </CardWrapper>
  );
};

const CardDesc = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.8);
  margin: 0;
`;

const DeployDescBtn = styled.span`
  color: #0086ff;
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    color: ${OtherColor.LINK_HOVER};
  }
`;

const ScrollLink = styled(DeployDescBtn)`
  font-family: "Roboto";
  font-weight: 500;
`;

const CardHeader = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #242424;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  @media screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  @media screen and (max-width: 1023px) {
    max-width: 413px;
  }
`;

const ImageContainer = styled.div<{ src: string }>`
  display: flex;
  width: 416px;
  height: 180px;
  border-radius: 12px;
  background: url(${({ src }) => src}) no-repeat 0 -30px;
  background-size: 416px;
  @media screen and (max-width: 1439px) {
    width: 296px;
    background-size: cover;
    background-position: 0;
  }
  @media screen and (max-width: 1023px) {
    width: 251px;
    height: 100%;
    background-size: ${({ src }) => (src.includes("3") ? "420px" : "296px")};
    background-position: ${({ src }) =>
      src.includes("3") ? "-85px -20px" : "-15px -5px"};
  }
  @media screen and (max-width: 767px) {
    width: 349px;
    height: 140px;
    background-size: 349px;
    background-position: 0 -25px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
    height: 140px;
    background-size: 288px;
    background-position: 0 -5px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 416px;
  @media screen and (max-width: 1439px) {
    max-width: 296px;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: row;
    max-width: 688px;
    column-gap: 24px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    max-width: 349px;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
  }
`;

export default memo(Card);
