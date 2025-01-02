import { MajIconButtonProps } from "./MajIconButton.type";

import { MajLightAddressBookIcon, MajLightThreeSixtyIcon, MajSolidAddressBookIcon, MajSolidThreeSixtyIcon } from "../maj-icon";
import "./MajIconButton.scss";

const MajIconButton: React.FC<MajIconButtonProps> = (props: MajIconButtonProps) => {

    const getLightIcons = () => {
        switch (props.variant) {
            case "360":
                return <MajLightThreeSixtyIcon />
            case "address-book":
                return <MajLightAddressBookIcon />
            default:
                break;
        }
    }

    const getSolidIcons = () => {
        switch (props.variant) {
            case "360":
                return <MajSolidThreeSixtyIcon />
            case "address-book":
                return <MajSolidAddressBookIcon />
            default:
                break;
        }
    }

    return (
        <section>
            <button>
                {props?.shade === "Light" ? getLightIcons() : props.shade === "Solid" ? getSolidIcons() : ""}
            </button>
        </section>
    );
};

export default MajIconButton;
