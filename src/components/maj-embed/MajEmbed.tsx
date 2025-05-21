import { MajEmbedProps } from "./MajEmbed.types";

const MajEmbed = (props: MajEmbedProps) => {
    return (
        <embed
            src={props.src}
            type={props?.type}
            width={props?.width}
            height={props?.height}
        />
    );
};

export default MajEmbed;
