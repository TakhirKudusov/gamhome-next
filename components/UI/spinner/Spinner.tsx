import { SpinnerIos } from "@styled-icons/fluentui-system-filled/SpinnerIos";
import styled, { keyframes } from "styled-components";
import { BrandColor } from "../../../common/enums";

const Spinner = () => {
  return (
    <Wrapper>
      <SpinnerIcon />
    </Wrapper>
  );
};

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const SpinnerIcon = styled(SpinnerIos)`
  height: 50px;
  width: 50px;
  justify-self: center;
  align-self: center;
  color: ${BrandColor.BRAND};
  animation: ${spinAnimation} linear infinite 0.5s;
`;

export default Spinner;
