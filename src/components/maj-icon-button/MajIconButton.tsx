import { MajIconButtonProps } from "./MajIconButton.type";

import logo from "../../assets/icons/svg/light/address-book.svg";

import "./MajIconButton.scss";

const MajIconButton: React.FC<MajIconButtonProps> = () => {
    return (
        <section>
            <button>
                <img
                    src={logo}
                    alt=""
                />
            </button>
        </section>
    );
};

export default MajIconButton;
