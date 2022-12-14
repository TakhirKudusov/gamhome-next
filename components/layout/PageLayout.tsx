import React, { memo, ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import Modal from "../UI/modal/Modal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TModalState } from "../../redux/slicers/types";
import CookiesPopup from "./cookies-popup/CookiesPopup";
import SideMenu from "../UI/side_menu/SideMenu";
import ScrollTopBtn from "../UI/scroll_top_btn/ScrollTopBtn";
import { setAcceptedCookie } from "../../redux/slicers/cookiePopUpSlicer";
import MobileMenu from "../UI/mobile_menu/MobileMenu";

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("acceptCookies")) {
      dispatch(setAcceptedCookie());
    }
  }, []);

  const { isOpened } = useAppSelector<TModalState>((state) => state.modalState);

  return (
    <>
      <SideMenu />
      <MobileMenu />
      <ScrollTopBtn />
      {isOpened && <Modal />}
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
      <CookiesPopup />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1440px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    min-width: 1024px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    min-width: 375px;
  }
  @media screen and (max-width: 374px) {
    min-width: 320px;
  }
`;

export default memo(PageLayout);
