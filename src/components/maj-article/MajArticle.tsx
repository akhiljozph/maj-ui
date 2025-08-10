import { MajArticleProps } from "./MajArticle.types";

const MajArticle = (props: MajArticleProps) => {
    return <article>{props?.children}</article>;
};

export default MajArticle;
