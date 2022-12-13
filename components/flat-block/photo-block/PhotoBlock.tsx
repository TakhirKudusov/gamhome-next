import React from "react";
import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";
import Control from "../../UI/control/Control";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import PhotoCarousel from "./PhotoCarousel";
import PreviewStack from "./PreviewStack";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";
import ImageLoadingSVG from "../../../public/assets/svg/ImageLoadingSVG";
import LoadingPreviewPhotos from "../../UI/loading-ui/LoadingPreviewPhotos";
import PreviewPoints from "../../check-owner-block/PreviewPoints";

const PhotoBlock: React.FC = () => {
  const { flatData, isLoading } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  return (
    <Container>
      <PhotoWrapper isLoading={isLoading}>
        {isLoading ? (
          <ImageLoadingSVG />
        ) : (
          <>
            <Control length={flatData?.images.length} orientation="left">
              <ChevronSVG />
            </Control>
            <PhotoCarousel />
            <Control length={flatData?.images.length} orientation="right">
              <ChevronSVG />
            </Control>
          </>
        )}
        <PreviewPoints />
      </PhotoWrapper>
      {isLoading ? <LoadingPreviewPhotos /> : <PreviewStack />}
    </Container>
  );
};

const PhotoWrapper = styled.div<{ isLoading: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 864px;
  height: 544px;
  background-color: ${({ isLoading }) =>
    isLoading ? LightBlueColor.LB_100_64 : LightBlueColor.LB_100};
  border-radius: 12px;
  overflow: hidden;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    height: 393px;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
    height: 332px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 24px;
    row-gap: 12px;
  }
  @media screen and (max-width: 374px) {
    width: 349px;
    height: 332px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 24px;
    row-gap: 12px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 0;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding-top: 16px;
    margin-bottom: 32px;
  }
  @media screen and (max-width: 374px) {
    padding-top: 16px;
    margin-bottom: 32px;
  }
`;

export default PhotoBlock;
