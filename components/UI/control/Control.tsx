import React, { memo, ReactNode } from "react";
import styled, { css } from "styled-components";
import { LightBlueColor } from "../../../common/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  decrement,
  increment,
  TPhotoPosition,
} from "../../../redux/slicers/photoPositionSlicer";
import { handleSwapImageClick } from "../../../common/helpers";

type Props = {
  orientation: "right" | "left";
  children: ReactNode;
  length: number;
  className?: string;
};

const Control: React.FC<Props> = ({
  orientation,
  children,
  className,
  length,
}) => {
  const dispatch = useAppDispatch();
  const { position } = useAppSelector<TPhotoPosition>(
    (state) => state.position
  );

  return (
    <Body
      onClick={handleSwapImageClick(orientation, dispatch)}
      orientation={orientation}
      className={className}
    >
      {children}
    </Body>
  );
};

const Body = styled.div<{ orientation: "right" | "left" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 10px;
  min-width: 56px;
  height: 56px;
  background: ${LightBlueColor.LB_300};
  border-radius: 100px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  ${({ orientation }) => {
    switch (orientation) {
      case "right":
        return css`
          right: 32px;
        `;
      case "left":
        return css`
          left: 32px;
        `;
    }
  }};
  & > * {
    transform: ${({ orientation }) =>
      orientation === "right" && "rotate(180deg)"};
  }
  &:active {
    background: ${LightBlueColor.LB_200};
  }
`;

export default memo(Control);