import {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import CloseSVG from "../../../public/assets/svg/CloseSVG";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import { handleMoneyDataFormatter } from "../../../common/helpers";
import { useAppDispatch } from "../../../redux/hooks";
import { contactManager } from "../../../redux/slicers/modalStateSlicer";
import { IBank } from "./types";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<IBank | null>>;
  bankData: IBank | null;
  cost: string;
  time: string;
  firsPay: string;
};

const BankModal: FC<Props> = ({
  isOpen,
  setIsOpen,
  bankData,
  cost,
  firsPay,
  time,
}) => {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    setIsOpen(null);
  };

  const handleModalClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const handleButtonClick = () => {
    setIsOpen(null);
    dispatch(contactManager());
  };

  return (
    <Wrapper onClick={handleCloseModal} isOpen={isOpen}>
      <Container onClick={handleModalClick}>
        <HeaderContainer>
          <CloseIconContainer onClick={handleCloseModal}>
            <CloseIcon />
          </CloseIconContainer>
        </HeaderContainer>
        <Body>
          <InfoContainer>
            <HeaderText>
              Рассчитайте ипотеку в&nbsp;{bankData?.bank?.name} и&nbsp;еще
              в&nbsp;нескольких банках
            </HeaderText>
            <EvaluationContainer>
              <EvTextContainer>
                <EvTextHeader>{cost}</EvTextHeader>
                <EvTextContent>Стоимость жилья</EvTextContent>
              </EvTextContainer>
              <EvTextContainer>
                <EvTextHeader>{firsPay}</EvTextHeader>
                <EvTextContent>Первоначальный взнос</EvTextContent>
              </EvTextContainer>
              <EvTextContainer>
                <EvTextHeader>{time}</EvTextHeader>
                <EvTextContent>Срок ипотеки</EvTextContent>
              </EvTextContainer>
              <EvTextContainer>
                <EvTextHeader>{bankData?.minimalPercent} %</EvTextHeader>
                <EvTextContent>Ставка от</EvTextContent>
              </EvTextContainer>
              <EvTextContainer>
                <EvTextHeader>от 1 дня</EvTextHeader>
                <EvTextContent>На одобрение</EvTextContent>
              </EvTextContainer>
              <EvTextContainer>
                <EvTextHeader>
                  {handleMoneyDataFormatter(bankData?.minimalPayment)} ₽/мес.
                </EvTextHeader>
                <EvTextContent>Платеж от</EvTextContent>
              </EvTextContainer>
            </EvaluationContainer>
          </InfoContainer>
          <DescriptionText>
            Менеджер уточнит дополнительные параметры кредита&nbsp;&mdash; они
            влияют на&nbsp;количество предложений банков и&nbsp;ставку.
            <br />
            Потребуются ваши данные и&nbsp;документы.
          </DescriptionText>
          <BtnContainer>
            <StyledButton
              isOpened={isOpen}
              buttonSize={ButtonSize.MEDIUM}
              onClick={handleButtonClick}
            >
              Связаться с менеджером
            </StyledButton>
          </BtnContainer>
          <AdaptiveBtnContainer>
            <BtnWrapper>
              <StyledButton
                isOpened={isOpen}
                buttonSize={ButtonSize.MEDIUM}
                onClick={handleButtonClick}
              >
                Связаться с менеджером
              </StyledButton>
            </BtnWrapper>
          </AdaptiveBtnContainer>
        </Body>
      </Container>
    </Wrapper>
  );
};

const BtnContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 375px;
  padding: 0 20px 32px;
  background-color: ${WhiteColor.WHITE};
  @media screen and (max-width: 374px) {
    width: 320px;
    padding: 0 12px 24px;
  }
`;

const AdaptiveBtnContainer = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const StyledButton = styled(Button)<{ isOpened: boolean }>`
  width: 236px;
  margin-top: -8px;
  transition: ${({ isOpened }) => !isOpened && "none"};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const DescriptionText = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
`;

const EvTextContent = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  display: flex;
  color: ${BlackColor.BLACK_80};
  white-space: nowrap;
`;

const EvTextHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  color: ${BlackColor.BLACK_SECONDARY};
  white-space: nowrap;
`;

const EvTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  @media screen and (max-width: 767px) {
    row-gap: 4px;
  }
`;

const EvaluationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  width: 403px;
  grid-gap: 24px 61px;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(6, auto);
    width: 100%;
    grid-gap: 18px 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 32px;
  @media screen and (max-width: 767px) {
    row-gap: 28px;
  }
`;

const HeaderText = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  color: ${BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-right: 24px;
  row-gap: 40px;
  @media screen and (max-width: 767px) {
    row-gap: 34px;
    margin-top: 24px;
  }
`;

const CloseIcon = styled(CloseSVG)`
  width: 17px;
  height: 17px;
  & path {
    fill: ${BrandColor.BRAND};
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  cursor: pointer;
  padding: 10px 10px 0;
  border-radius: 12px;
  transition: 0.1s linear;
  &:hover {
    background: ${BrandColor.BRAND_12};
  }
  &:active {
    background: ${BrandColor.BRAND_16};
  }
  @media screen and (max-width: 767px) {
    position: fixed;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 8px 16px 40px 40px;
  width: 640px;
  border-radius: 16px;
  @media screen and (max-width: 767px) {
    border-radius: 16px 16px 0 0;
    padding: 8px 8px 88px 20px;
    width: 375px;
    max-height: 100vh;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  @media screen and (max-width: 374px) {
    width: 320px;
  }
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 10;
  top: 0;
  background-color: ${BlackColor.BLACK_80};
  @media screen and (max-width: 767px) {
    align-items: flex-end;
  }
`;

export default memo(BankModal);
