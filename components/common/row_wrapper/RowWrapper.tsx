import { FC } from "react";
import { ChildProp } from "../../../common/types";
import styled from "styled-components";
import { Hook } from "../../../common/routes";

const RowWrapper: FC<ChildProp> = ({ children }) => {
  return <InfoWrapperRow id={Hook.ROW_WRAPPER}>{children}</InfoWrapperRow>;
};

const InfoWrapperRow = styled.div`
  display: flex;
  width: 100%;
  justify-items: center;
  justify-content: center;
  padding: 0 64px;
  column-gap: 32px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    padding-left: 36px;
    padding-right: 36px;
    width: 952px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    width: 688px;
  }
  @media screen and (max-width: 767px) {
    padding-left: 13px;
    padding-right: 13px;
    width: 349px;
  }
`;

export default RowWrapper;
