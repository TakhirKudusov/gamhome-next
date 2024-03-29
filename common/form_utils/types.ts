import { ReactNode, RefObject } from "react";
import { FieldName } from "../../redux/slicers/types";
import { AppDispatch } from "../../redux/types";

type Ref = {
  value: number | boolean | string;
  ref?: RefObject<any>;
  children: string;
};

type FlatParamName =
  | "repair"
  | "minFloorsInHouse"
  | "maxFloorsInHouse"
  | "minKitchenSquare"
  | "maxKitchenSquare"
  | "minSquare"
  | "maxSquare"
  | "roomsQuantity"
  | "minFloor"
  | "maxFloor"
  | "minLivingSquare"
  | "maxLivingSquare"
  | "houseType"
  | "minDeliveryTime"
  | "partType"
  | "dealType"
  | "objType"
  | "maxDeliveryTime";

type RoomParamName =
  | "minFloor"
  | "maxFloor"
  | "minFloorsInHouse"
  | "maxFloorsInHouse"
  | "minRoomSquare"
  | "maxRoomSquare"
  | "roomsInFlatQuantity"
  | "houseType";

type HouseParamName =
  | "minHouseSquare"
  | "maxHouseSquare"
  | "minFloorsInHouse"
  | "maxFloorsInHouse"
  | "minLandSquare"
  | "maxLandSquare"
  | "objType"
  | "wallMaterial";

type AddParameters = FlatParamName | RoomParamName | HouseParamName;

type Params = {
  id: number;
};

type ChildrenProp = {
  children: ReactNode;
};

type userData = {
  author: number;
  category: number | Params;
  fee: boolean;
  isAgent: boolean;
  kmMetro: [number, number];
  location: string[];
  maxPrice: number;
  minPrice: number;
  type: number | Params;
  city?: Params;
  metros?: Params;
  districts?: Params;
};

type Refs = {
  refs: Ref[];
  type: FieldName;
  paramType?: AddParameters;
};

type HandleChangeActiveClick = (
  ref: Ref,
  obj: Refs,
  dispatch: AppDispatch
) => () => void;

export type {
  ChildrenProp,
  HandleChangeActiveClick,
  Refs,
  userData,
  AddParameters,
};
