import styled, { css } from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";

const PropertyValuation = () => {
  return (
    <Wrapper>
      <Container>
        <InfoBlock>
          <TextContainer>
            <Header>Оценка недвижимости</Header>
            <DescText>
              Подготовим отчёт от аккредитованных банками компаний. Персональный
              менеджер ответит на все вопросы и запросит необходимую информацию
              для оценки. Готовый отчёт вышлем на почту и загрузим в личный
              кабинет банка. <br />
              <br /> Эта информация предоставляется банку, чтобы купить в
              ипотеку или застраховать недвижимость.
            </DescText>
          </TextContainer>
          <StyledButton buttonSize={ButtonSize.LARGE}>
            Заказать от 2 500 ₽
          </StyledButton>
        </InfoBlock>
        <ImagesContainer>
          <Image size={1} image="/images/buy_flat_1.webp" />
          <Image size={2} image="/images/buy_flat_2.webp" />
          <Image size={3} image="/images/buy_flat_3.webp" />
          <Image size={4} image="/images/buy_flat_4.webp" />
        </ImagesContainer>
      </Container>
    </Wrapper>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  width: 639px;
  height: 456px;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 443px;
    height: 365px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 277px;
    height: 278px;
  }
`;

const Image = styled.div<{ image: string; size: 1 | 2 | 3 | 4 }>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  border-radius: 24px;
  ${({ size }) => {
    switch (size) {
      case 1:
        return css`
          width: 253px;
          height: 327px;
        `;
      case 2:
        return css`
          width: 363px;
          height: 266px;
        `;
      case 3:
        return css`
          width: 353px;
          height: 260px;
          position: relative;
          left: 100px;
          bottom: 180px;
        `;
      case 4:
        return css`
          width: 213px;
          height: 319px;
          position: relative;
          right: 12px;
          bottom: 190px;
        `;
    }
  }};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    ${({ size }) => {
      switch (size) {
        case 1:
          return css`
            width: 176px;
            height: 227px;
          `;
        case 2:
          return css`
            width: 252px;
            height: 184px;
          `;
        case 3:
          return css`
            width: 246px;
            height: 181px;
            position: relative;
            left: 42px;
            bottom: 90px;
          `;
        case 4:
          return css`
            width: 148px;
            height: 191px;
            position: relative;
            right: 31px;
            bottom: 54px;
          `;
      }
    }}
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    ${({ size }) => {
      switch (size) {
        case 1:
          return css`
            width: 119px;
            height: 153px;
            position: relative;
            top: 26px;
            z-index: 1;
          `;
        case 2:
          return css`
            width: 170px;
            height: 125px;
            position: relative;
            bottom: 152px;
            left: 100px;
            z-index: 0;
          `;
        case 3:
          return css`
            width: 181px;
            height: 133px;
            position: relative;
            left: 29px;
            bottom: 165px;
            z-index: 2;
          `;
        case 4:
          return css`
            width: 100px;
            height: 130px;
            position: relative;
            left: 177px;
            bottom: 263px;
            z-index: 3;
          `;
      }
    }}
  }
`;

const StyledButton = styled(Button)`
  width: 214px;
  height: 56px;
  white-space: nowrap;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    width: 190px;
    height: 44px;
  }
`;

const DescText = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 527px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 377px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 360px;
  }
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  row-gap: 40px;
`;

const Container = styled.div`
  display: flex;
  width: 1247px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 951px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 112px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
  }
`;

export default PropertyValuation;