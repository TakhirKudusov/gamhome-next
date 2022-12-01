import React from "react";
import styled from "styled-components";
import { BrandColor } from "../../../common/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPosition } from "../../../redux/slicers/photoPositionSlicer";
import { TFlatState, TPhotoPosition } from "../../../redux/slicers/types";

type Props = {
  size: [number, number];
  quantity: number;
};

const PreviewList: React.FC<Props> = ({ size, quantity }) => {
  const dispatch = useAppDispatch();

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );

  const handelPreviewClick = (index: number) => () => {
    dispatch(setPosition(index));
  };

  return (
    <ImagesWrapper size={size} quantity={quantity} position={position}>
      {flatData?.images.map((el, index) => (
        <Image
          onClick={handelPreviewClick(index)}
          outline={position === index}
          key={el.id}
          image={el.url}
          size={size}
        />
      ))}
    </ImagesWrapper>
  );
};

const ImagesWrapper = styled.div<{
  position: number;
  quantity: number;
  size: [number, number];
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: translateX(
    ${({ position, quantity, size }) =>
      position > 4 &&
      `-${Math.floor(position / quantity) * quantity * (size[0] + 16)}px`}
  );
`;

const Image = styled.div<{
  image: string;
  outline: boolean;
  size: [number, number];
}>`
  background: url(${({ image }) => image}) no-repeat border-box;
  background-size: cover;
  min-width: ${({ size }) => size[0] + "px"};
  height: ${({ size }) => size[1] + "px"};
  border-radius: 12px;
  margin: 16px 16px 0 0;
  cursor: pointer;
  transition: 0s;
  border: ${({ outline }) => outline && `2px solid ${BrandColor.BRAND}`};
`;

export default PreviewList;