import {
  setParamInput,
  setPrimitiveField,
} from "../../../redux/slicers/formDataSlicer";
import { FieldName, TFormData } from "../../../redux/slicers/types";
import { AddParameters } from "../../../common/form_utils/types";
import { AppDispatch } from "../../../redux/types";

const handleChangeValue =
  (
    type: "min" | "max",
    isParam: boolean | undefined,
    minType: FieldName,
    maxType: FieldName,
    dispatch: AppDispatch
  ) =>
  (e: any) => {
    if (type === "min") {
      if (isParam) {
        dispatch(
          setParamInput({ name: minType as FieldName, value: e.target.value })
        );
        return;
      }
      dispatch(
        setPrimitiveField({ name: minType as FieldName, value: e.target.value })
      );
    } else {
      if (isParam) {
        dispatch(
          setParamInput({ name: maxType as FieldName, value: e.target.value })
        );
        return;
      }
      dispatch(
        setPrimitiveField({ name: maxType as FieldName, value: e.target.value })
      );
    }
  };

const getInputValue = (
  type: "min" | "max",
  isParam: boolean | undefined,
  data: TFormData["data"],
  minType: FieldName | AddParameters,
  maxType: FieldName | AddParameters
) => {
  if (type === "min") {
    if (isParam) return data.params[minType as AddParameters];
    return (data as any)[minType as FieldName];
  } else {
    if (isParam) return data.params[maxType as AddParameters];
    return (data as any)[maxType as FieldName];
  }
};

export { handleChangeValue, getInputValue };
