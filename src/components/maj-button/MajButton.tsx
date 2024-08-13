import { MajButtonProps } from "./MajButton.type";

import "./MajButton.scss";

const MajButton: React.FC<MajButtonProps> = (props: MajButtonProps) => {
  return (
    <button
      className={
        props.size === "large"
          ? `maj-btn maj-btn-lg maj-${props.variant}-btn`
          : props.size === "small"
            ? `maj-btn maj-btn-sm maj-${props.variant}-btn `
            : `maj-btn maj-${props.variant}-btn`
      }
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default MajButton;
