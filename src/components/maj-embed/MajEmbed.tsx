import { MajEmbedProps } from "./MajEmbed.types";

const MajEmbed = (props: MajEmbedProps) => {
    return <embed src={props.src} />;
};

export default MajEmbed;
