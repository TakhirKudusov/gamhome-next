import { memo } from "react";

type Props = {
  className?: string;
};

const ChevronSVG: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.256757 7.84029C0.0925578 7.6763 0.000204299 7.45381 0 7.22174V6.77826C0.00268895 6.54669 0.0946685 6.3251 0.256757 6.15971L6.25552 0.172609C6.36509 0.0621384 6.51424 0 6.66984 0C6.82543 0 6.97458 0.0621384 7.08415 0.172609L7.91277 1.00123C8.02255 1.10879 8.08441 1.25602 8.08441 1.40971C8.08441 1.5634 8.02255 1.71062 7.91277 1.81819L2.71929 7L7.91277 12.1818C8.02324 12.2914 8.08538 12.4405 8.08538 12.5961C8.08538 12.7517 8.02324 12.9009 7.91277 13.0104L7.08415 13.8274C6.97458 13.9379 6.82543 14 6.66984 14C6.51424 14 6.36509 13.9379 6.25552 13.8274L0.256757 7.84029Z"
        fill="white"
      />
    </svg>
  );
};

export default memo(ChevronSVG);
