import { MajCardProps } from "./MajCard.types";

import "./MajCard.scss";
import { MajArticle } from "../maj-article";

const MajCard: React.FC<MajCardProps> = (props: MajCardProps) => {
    return (
        <div>
            <MajArticle>{props?.children}</MajArticle>
        </div>
    );
};

export default MajCard;
