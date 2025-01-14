import { MajIconButtonProps } from "./MajIconButton.type";

import {
    MajLightAddressBookIcon,
    MajLightAngleDownIcon,
    MajLightAngleLeftIcon,
    MajLightAngleRightIcon,
    MajLightArrowDownIcon,
    MajLightArrowDownToLineIcon,
    MajLightArrowLeftIcon,
    MajLightArrowRightArrowLeftIcon,
    MajLightArrowRightIcon,
    MajLightArrowUpFromBracketIcon,
    MajLightArrowUpToLineIcon,
    MajLightThreeSixtyIcon,
    MajSolidAddressBookIcon,
    MajSolidAngleDownIcon,
    MajSolidAngleLeftIcon,
    MajSolidAngleRightIcon,
    MajSolidArrowDownIcon,
    MajSolidArrowDownToLineIcon,
    MajSolidArrowLeftIcon,
    MajSolidArrowRightArrowLeftIcon,
    MajSolidArrowRightIcon,
    MajSolidArrowUpFromBracketIcon,
    MajSolidArrowUpToLineIcon,
    MajSolidThreeSixtyIcon,
} from "../maj-icon";
import "./MajIconButton.scss";

const MajIconButton: React.FC<MajIconButtonProps> = (props: MajIconButtonProps) => {
    const getLightIcons = () => {
        switch (props.variant) {
            case "360":
                return <MajLightThreeSixtyIcon />;
            case "address-book":
                return <MajLightAddressBookIcon />;
            case "angle-down":
                return <MajLightAngleDownIcon />;
            case "angle-left":
                return <MajLightAngleLeftIcon />;
            case "angle-right":
                return <MajLightAngleRightIcon />;
            case "arrow-down":
                return <MajLightArrowDownIcon />;
            case "arrow-down-to-line":
                return <MajLightArrowDownToLineIcon />;
            case "arrow-left":
                return <MajLightArrowLeftIcon />;
            case "arrow-right":
                return <MajLightArrowRightIcon />;
            case "arrow-right-arrow-left":
                return <MajLightArrowRightArrowLeftIcon />;
            case "arrow-up-from-bracket":
                return <MajLightArrowUpFromBracketIcon />;
            case "arrow-up-to-line":
                return <MajLightArrowUpToLineIcon />;
            default:
                break;
        }
    };

    const getSolidIcons = () => {
        switch (props.variant) {
            case "360":
                return <MajSolidThreeSixtyIcon />;
            case "address-book":
                return <MajSolidAddressBookIcon />;
            case "angle-down":
                return <MajSolidAngleDownIcon />;
            case "angle-left":
                return <MajSolidAngleLeftIcon />;
            case "angle-right":
                return <MajSolidAngleRightIcon />;
            case "arrow-down":
                return <MajSolidArrowDownIcon />;
            case "arrow-down-to-line":
                return <MajSolidArrowDownToLineIcon />;
            case "arrow-left":
                return <MajSolidArrowLeftIcon />;
            case "arrow-right":
                return <MajSolidArrowRightIcon />;
            case "arrow-right-arrow-left":
                return <MajSolidArrowRightArrowLeftIcon />;
            case "arrow-up-from-bracket":
                return <MajSolidArrowUpFromBracketIcon />;
            case "arrow-up-to-line":
                return <MajSolidArrowUpToLineIcon />;
            default:
                break;
        }
    };

    return (
        <section>
            <button>
                {props?.shade === "Light"
                    ? getLightIcons()
                    : props.shade === "Solid"
                      ? getSolidIcons()
                      : ""}
            </button>
        </section>
    );
};

export default MajIconButton;
