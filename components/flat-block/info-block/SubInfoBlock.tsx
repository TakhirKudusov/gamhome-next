import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import ChevronDoneSVG from "../../../public/assets/svg/ChevronDoneSVG";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";

const SubInfoBlock = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);
  const { isLoading } = useAppSelector<TFlatState>((state) => state.flatData);

  const subInfoData: string[] | null = flatData
    ? JSON.parse(flatData?.additionalParams as string)
    : null;

  return (
    <Container>
      {!isLoading &&
        subInfoData?.map((el: string, i: number) => {
          return (
            <TextWrapper key={el + i}>
              <ChevronDoneSVG />
              <Text>{el}</Text>
            </TextWrapper>
          );
        })}
    </Container>
  );
};

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0 0 0 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 24px 48px 24px 24px;
  width: 864px;
  height: 216px;
  background: ${LightBlueColor.LB_100};
  border-radius: 24px;
  margin-top: 24px;
  row-gap: 12px;
  column-gap: 112.5px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
    height: 264px;
  }
`;

export default SubInfoBlock;
