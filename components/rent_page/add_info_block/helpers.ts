import { Dispatch, SetStateAction } from "react";
import { WindowSize } from "../../../redux/slicers/enums";

const handleResizeMap = (
  windowSize: WindowSize,
  setWidth: Dispatch<SetStateAction<number | undefined>>,
  setHeight: Dispatch<SetStateAction<number | undefined>>
) => {
  if (windowSize === WindowSize.XL) {
    setWidth(864);
    setHeight(448);
  }
  if (windowSize === WindowSize.LG) {
    setWidth(624);
    setHeight(385);
  }
  if (windowSize === WindowSize.MD) {
    setWidth(688);
    setHeight(416);
  }
  if (windowSize === WindowSize.SM) {
    setWidth(349);
    setHeight(297);
  }
  if (windowSize === WindowSize.XS) {
    setWidth(288);
    setHeight(297);
  }
};

export { handleResizeMap };
