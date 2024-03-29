import { ComponentWithLayout } from "../common/types";
import LandingLayout from "../components/landing_page/layout/LandingLayout";
import dynamic from "next/dynamic";
import Spinner from "../components/UI/spinner/Spinner";

const LandingPage = dynamic(
  () => import("../components/landing_page/LandingPage"),
  {
    loading: () => <Spinner />,
  }
);

const HomePage: ComponentWithLayout = () => {
  return <LandingPage />;
};

HomePage.PageLayout = LandingLayout;

export default HomePage;
