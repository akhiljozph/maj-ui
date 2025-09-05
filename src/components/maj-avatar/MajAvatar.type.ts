export type MajAvatarProps = {
    avatarURL?: string;
    avatarALT?: string;
    avatarType: "image" | "initial" | "icon";
    initial?: string;
    className?: string;
    size?: "small" | "medium" | "large";
    icon?: React.ReactNode;
    isRounded?: boolean;
    onClick?: (event: any) => void;
};
