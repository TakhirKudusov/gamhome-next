import { TabBodyData, TabContentType } from "./types";
import React, { memo, useEffect, useMemo } from "react";
import styled, { css } from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import DoneSVG from "../../../public/assets/svg/DoneSVG";
import Button from "../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../UI/button/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { SortByPriority } from "../../../common/helpers";
import { TWindowSize } from "../../../redux/slicers/types";

type Props = {
  data: TabBodyData;
};

const Conditions: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const sortedConditions = useMemo(
    SortByPriority(windowSize, data.additionalInfo.points),
    [windowSize, data]
  );

  const handleOrderClick = () => {
    dispatch(data.btnAction());
  };

  return (
    <Container contentType={data.contentType}>
      <Wrapper contentType={data.contentType}>
        <Header>{data.additionalInfo.header}</Header>
        <ConditionsContainer contentType={data.contentType}>
          {sortedConditions.map((el, i) => {
            return (
              <TextContainer key={el.id} contentType={data.contentType}>
                <IconContainer>
                  <DoneSVG />
                </IconContainer>

                <ConditionText contentType={data.contentType}>
                  {el.text}
                </ConditionText>
              </TextContainer>
            );
          })}
        </ConditionsContainer>
      </Wrapper>
      <ButtonGroupContainer contentType={data.contentType}>
        <StyledButton onClick={handleOrderClick} buttonSize={ButtonSize.MEDIUM}>
          Заказать за {data.additionalInfo.cost} ₽
        </StyledButton>
        <StyledButton
          buttonType={ButtonType.OUTLINE}
          buttonSize={ButtonSize.MEDIUM}
        >
          Скачать пример отчёта
        </StyledButton>
      </ButtonGroupContainer>
    </Container>
  );
};

const StyledButton = styled(Button)`
  height: 44px;
`;

const ButtonGroupContainer = styled.div<{ contentType: TabContentType }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 218px;
  row-gap: 12px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    ${({ contentType }) => {
      if (contentType === "jurAnalysis") {
        return css`
          flex-direction: row;
          width: 448px;
          column-gap: 12px;
        `;
      }
    }}
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    column-gap: 12px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    flex-direction: column;
    width: 100%;
    column-gap: 12px;
  }
  @media screen and (max-width: 374px) {
    flex-direction: column;
    width: 100%;
    column-gap: 12px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const ConditionText = styled.p<{ contentType: TabContentType }>`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${BlackColor.BLACK_64};
  width: ${({ contentType }) =>
    contentType === "jurAnalysis" ? "293px" : "274px"};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "394px" : "265px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    min-width: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "293px" : "288px"};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    min-width: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "319px" : "288px"};
  }
  @media screen and (max-width: 374px) {
    min-width: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "256px" : "238px"};
  }
`;

const TextContainer = styled.div<{ contentType: TabContentType }>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 6px;
  width: ${({ contentType }) =>
    contentType === "jurAnalysis" ? "323px" : "303px"};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "424px" : "295px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    width: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "320px" : "318px"};
  }
  @media screen and (max-width: 374px) {
    width: 255px;
  }
`;

const ConditionsContainer = styled.div<{ contentType: TabContentType }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 8px;
  height: ${({ contentType }) =>
    contentType === "jurAnalysis" ? "136px" : "112px"};
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    column-gap: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "32px" : "20px"};
    height: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "168px" : "152px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    height: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "216px" : "152px"};
  }
  @media screen and (max-width: 767px) {
    flex-wrap: nowrap;
    height: fit-content;
  }
  @media screen and (max-width: 374px) {
    margin-left: 12px;
    width: 264px;
  }
`;

const Header = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  color: ${BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 374px) {
    margin-left: 12px;
  }
`;

const Wrapper = styled.div<{ contentType: TabContentType }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 24px;
  width: ${({ contentType }) =>
    contentType === "jurAnalysis" ? "988px" : "909px"};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "880px" : "610px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "672px" : "656px"};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const Container = styled.div<{ contentType: TabContentType }>`
  display: flex;
  align-items: center;
  justify-items: center;
  column-gap: 32px;
  margin-top: 32px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    column-gap: 24px;
    ${({ contentType }) => {
      if (contentType === "jurAnalysis") {
        return css`
          flex-direction: column;
          height: 304px;
          justify-content: space-between;
        `;
      }
    }}
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    ${({ contentType }) => {
      if (contentType === "jurAnalysis") {
        return css`
          height: 352px;
          justify-content: space-between;
        `;
      }
    }}
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    row-gap: 40px;
  }
  @media screen and (max-width: 767px) {
    row-gap: 32px;
  }
`;

export default memo(Conditions);
