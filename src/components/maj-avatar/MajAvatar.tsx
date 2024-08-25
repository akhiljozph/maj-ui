import { MajAvatarProps } from "./MajAvatar.type";

import "./MajAvatar.scss";

const MajAvatar: React.FC<MajAvatarProps> = (props: MajAvatarProps) => {
  const makeAvatarWithInitial = (
    <span className="maj-avatar-initial">{props?.initial}</span>
  );

  const makeAvatarWithIcon = (
    <span className="maj-avatar-icon">Icon avatar</span>
  );

  const makeAvatarWithImage = (
    <img src={props?.avatarURL} alt={props?.avatarALT} />
  );

  return (
    <>
      <div className="maj-avatar-container">
        <div className="maj-avatar">
          {props.avatarType === "initial"
            ? makeAvatarWithInitial
            : props.avatarType === "image"
              ? makeAvatarWithImage
              : makeAvatarWithIcon}
        </div>
      </div>
    </>
  );
};

export default MajAvatar;
