import { AppProps } from "next/app";
import React, { MutableRefObject, ReactNode, RefObject } from "react";
import {
  BlackColor,
  BrandColor,
  LightBlueColor,
  LinerColor,
  OtherColor,
  WhiteColor,
} from "../enums";

type ComponentWithLayout = AppProps["Component"] & {
  PageLayout?: React.FC<any>;
};

type AppWithPageLayout = AppProps & {
  Component: ComponentWithLayout;
};

type Color =
  | BlackColor
  | WhiteColor
  | LightBlueColor
  | BrandColor
  | LinerColor
  | OtherColor
  | "none";

type AdaptiveLayoutPriority = Record<
  "xlPriority" | "lgPriority" | "mdPriority" | "smPriority" | "xsPriority",
  number
>;

type ObservableElementsNames =
  | "cardWithImage"
  | "mainServices"
  | "discountPartners"
  | "webinar";

type ObservableRefAttrs = {
  ref: RefObject<unknown>["current"];
  callback?: (param: boolean) => void;
  name?: ObservableElementsNames;
};

export type {
  AppWithPageLayout,
  ComponentWithLayout,
  Color,
  AdaptiveLayoutPriority,
  ObservableRefAttrs,
  ObservableElementsNames,
};

export type ChildProp = {
  children: ReactNode;
};
