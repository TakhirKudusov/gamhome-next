import styled from "styled-components";
import { BlackColor, Font } from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";
import KeySVG from "../../public/assets/svg/KeySVG";
import { useEffect, useRef, useState } from "react";

const PriceBlock: React.FC = () => {
  const [translateBlock, setTranslateBlock] = useState<number>(0);

  const handleFixBlockScroll = () => {
    if (typeof window !== "undefined") {
      setTranslateBlock(window.scrollY);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleFixBlockScroll);
    return () => document.removeEventListener("scroll", handleFixBlockScroll);
  }, []);

  return (
    <Container translation={translateBlock}>
      <HeaderText>390 000 ₽ в мес</HeaderText>
      <SubHeaderText>
        Залог 390 000 ₽, без комиссии, предоплата за 1 месяц, от года
      </SubHeaderText>
      <Button buttonSize={ButtonSize.LARGE}>
        <ButtonText>Показать телефон</ButtonText>
      </Button>
      <Button
        buttonType={ButtonType.PRIMARY_PURPLE}
        buttonSize={ButtonSize.LARGE}
      >
        <KeyIcon />
        <ButtonText>Подберите мне квартиру</ButtonText>
      </Button>
      <Button buttonType={ButtonType.FLAT} buttonSize={ButtonSize.LARGE}>
        <ButtonText>Перейти на страницу объявления</ButtonText>
      </Button>
    </Container>
  );
};

const KeyIcon = styled(KeySVG)`
  margin-right: 7px;
`;

const ButtonText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

const SubHeaderText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: ${BlackColor.BLACK_64};
  margin: 0 0 20px;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${BlackColor.BLACK_PRIMARY};
  margin: 0;
`;

const Container = styled.div<{ translation: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 416px;
  gap: 12px;
  transform: translateY(${({ translation }) => translation}px);
`;

export default PriceBlock;
