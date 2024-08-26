import { MajAvatarProps } from "./MajAvatar.type";

import "./MajAvatar.scss";

const MajAvatar: React.FC<MajAvatarProps> = (props: MajAvatarProps) => {
  const makeAvatarWithInitial = (
    <span className="maj-avatar-initial">{props?.initial}</span>
  );

  const makeAvatarWithIcon = (
    <span className="maj-avatar-icon">
      <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.203 24C24.6718 23.0938 23.953 22.375 23.0468 21.8438C22.1405 21.2812 21.1249 21 19.9999 21H16.9999C15.8749 21 14.8593 21.2812 13.953 21.8438C13.0468 22.375 12.328 23.0938 11.7968 24C12.6405 24.9375 13.6249 25.6719 14.7499 26.2031C15.9061 26.7344 17.1561 27 18.4999 27C19.8436 27 21.0936 26.7344 22.2499 26.2031C23.3749 25.6719 24.3593 24.9375 25.203 24ZM6.49988 18C6.53113 15.8125 7.06238 13.8125 8.09363 12C9.15613 10.1875 10.6249 8.71875 12.4999 7.59375C14.4061 6.53125 16.4061 6 18.4999 6C20.5936 6 22.5936 6.53125 24.4999 7.59375C26.3749 8.71875 27.8436 10.1875 28.9061 12C29.9374 13.8125 30.4686 15.8125 30.4999 18C30.4686 20.1875 29.9374 22.1875 28.9061 24C27.8436 25.8125 26.3749 27.2812 24.4999 28.4062C22.5936 29.4688 20.5936 30 18.4999 30C16.4061 30 14.4061 29.4688 12.4999 28.4062C10.6249 27.2812 9.15613 25.8125 8.09363 24C7.06238 22.1875 6.53113 20.1875 6.49988 18ZM18.4999 18.75C19.7811 18.7188 20.7499 18.1562 21.4061 17.0625C22.0311 15.9375 22.0311 14.8125 21.4061 13.6875C20.7499 12.5938 19.7811 12.0312 18.4999 12C17.2186 12.0312 16.2499 12.5938 15.5936 13.6875C14.9686 14.8125 14.9686 15.9375 15.5936 17.0625C16.2499 18.1562 17.2186 18.7188 18.4999 18.75Z" fill="#000000" />
      </svg>
    </span>
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
