import { AnyAction, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import photoPositionReducer from "./slicers/photoPositionSlicer";
import modalStateReducer from "./slicers/modalStateSlicer";
import flatDataReducer from "./slicers/flatDataSlicer";
import ownerDataReducer from "./slicers/ownerDataSlicer";
import serviceDataReducer from "./slicers/serviceDataSlicer";
import windowSizeReducer from "./slicers/windowSizeSlicer";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const combinedReducer = combineReducers({
  position: photoPositionReducer,
  modalState: modalStateReducer,
  flatData: flatDataReducer,
  ownerData: ownerDataReducer,
  serviceData: serviceDataReducer,
  windowSize: windowSizeReducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<any>) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  } as any);

export const wrapper = createWrapper(makeStore, { debug: true });
