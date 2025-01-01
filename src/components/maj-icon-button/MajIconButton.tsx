import { MajIconButtonProps } from "./MajIconButton.type";

import { MajLightAddressBookIcon } from "../maj-icon";
import "./MajIconButton.scss";

const MajIconButton: React.FC<MajIconButtonProps> = () => {
    return (
        <section>
            <button>
                <MajLightAddressBookIcon />
            </button>
        </section>
    );
};

export default MajIconButton;
