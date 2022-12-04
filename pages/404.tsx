import ErrorPage from "../components/error-page/ErrorPage";

const ErrNotFound = () => {
  const header = "Похоже, мы не можем найти то, что вы искали";
  const desc = "Страница удалена или никогда не существовала";

  return <ErrorPage header={header} desc={desc} />;
};

export default ErrNotFound;
