import { MajArticleProps } from "./MajArticle.types";

const MajArticle = (props: MajArticleProps) => {
    return <article className={props?.className || ''}>{props?.children}</article>;
};

export default MajArticle;
