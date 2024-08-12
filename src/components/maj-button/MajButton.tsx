import { MajButtonProps } from "./MajButton.type";

import "./MajButton.scss";

const MajButton: React.FC<MajButtonProps> = (props: MajButtonProps) => {
  return (
    <button className={`maj-btn maj-${props.variant}-btn`} disabled={props.disabled}>{ props.text }</button>
  );
};

export default MajButton;
