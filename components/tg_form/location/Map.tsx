import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline";
import { TFormData } from "../../../redux/slicers/types";
import { AppContext } from "../../../common/context/AppContext";
import { useMapBox } from "../../../common/custom_hooks/useMapBox";
import ModalWrapper from "../../tg_form_ui/wrapper_ui/ModalWrapper";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import DoneSVG from "../../../public/assets/svg/DoneSVG";

const Map = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { isMapOpen, setIsMapOpen } = useContext(AppContext);

  const dispatch = useAppDispatch();

  const [map, draw, init] = useMapBox(dispatch);

  const {
    data: { polygon },
  } = useAppSelector<TFormData>((state) => state.formData);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (polygon === null && mounted) {
      draw.deleteAll();
    }
    if (!mounted) setMounted(true);
  }, [polygon]);

  useEffect(() => {
    if (polygon && draw && mounted) {
      draw.add(polygon);
    }
  }, [polygon, draw]);

  const handleReturnClick = () => {
    setIsMapOpen!(false);
  };

  return (
    <>
      <ModalWrapper isOpen={isMapOpen as boolean}>
        <MapContainer id="map" />
        <ReturnButton onClick={handleReturnClick}>
          <DoneIcon />
        </ReturnButton>
      </ModalWrapper>
    </>
  );
};

const DoneIcon = styled(DoneSVG)`
  & path {
    fill: green;
  }
`;

const ArrowIcon = styled(ArrowIosBackOutline)`
  height: 25px;
  color: #333333;
`;

const ReturnButton = styled.div`
  display: flex;
  height: 29px;
  width: 29px;
  border-radius: 5px;
  box-sizing: content-box;
  border: 2px rgba(0, 0, 0, 0.75) solid;
  cursor: pointer;
  position: fixed;
  background-color: rgb(255, 255, 255);
  z-index: 10;
  top: 8px;
  left: 8px;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Map;
