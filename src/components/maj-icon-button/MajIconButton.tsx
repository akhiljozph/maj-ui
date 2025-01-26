import { MajIconButtonProps } from "./MajIconButton.type";

import {
    MajLightAddressBookIcon,
    MajLightAngleDownIcon,
    MajLightAngleLeftIcon,
    MajLightAngleRightIcon,
    MajLightAngleUpIcon,
    MajLightArrowDownIcon,
    MajLightArrowDownToLineIcon,
    MajLightArrowLeftIcon,
    MajLightArrowRightArrowLeftIcon,
    MajLightArrowRightIcon,
    MajLightArrowsRotateIcon,
    MajLightArrowUpFromBracketIcon,
    MajLightArrowUpToLineIcon,
    MajLightArrowwUpIcon,
    MajLightBackwardStepIcon,
    MajLightBarcodeReadIcon,
    MajLightBarsIcon,
    MajLightBellIcon,
    MajLightBoltLightningIcon,
    MajLightBoxOpenIcon,
    MajLightThreeSixtyIcon,
    MajSolidAddressBookIcon,
    MajSolidAngleDownIcon,
    MajSolidAngleLeftIcon,
    MajSolidAngleRightIcon,
    MajSolidAngleUpIcon,
    MajSolidArrowDownIcon,
    MajSolidArrowDownToLineIcon,
    MajSolidArrowLeftIcon,
    MajSolidArrowRightArrowLeftIcon,
    MajSolidArrowRightIcon,
    MajSolidArrowsRotateIcon,
    MajSolidArrowUpFromBracketIcon,
    MajSolidArrowUpToLineIcon,
    MajSolidArrowwUpIcon,
    MajSolidBackwardStepIcon,
    MajSolidBarcodeReadIcon,
    MajSolidBarsIcon,
    MajSolidBellIcon,
    MajSolidBoltLightningIcon,
    MajSolidBoxOpenIcon,
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
            case "angle-up":
                return <MajLightAngleUpIcon />;
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
            case "arrow-up":
                return <MajLightArrowwUpIcon />;
            case "arrows-rotate":
                return <MajLightArrowsRotateIcon />;
            case "backward-step":
                return <MajLightBackwardStepIcon />;
            case "barcode-read":
                return <MajLightBarcodeReadIcon />;
            case "bars":
                return <MajLightBarsIcon />;
            case "bell":
                return <MajLightBellIcon />;
            case "bolt-lightning":
                return <MajLightBoltLightningIcon />;
            case "box-open":
                return <MajLightBoxOpenIcon />;
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
            case "angle-up":
                return <MajSolidAngleUpIcon />;
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
            case "arrows-up":
                return <MajSolidArrowwUpIcon />;
            case "arrows-rotate":
                return <MajSolidArrowsRotateIcon />;
            case "backward-step":
                return <MajSolidBackwardStepIcon />;
            case "barcode-read":
                return <MajSolidBarcodeReadIcon />;
            case "bars":
                return <MajSolidBarsIcon />;
            case "bell":
                return <MajSolidBellIcon />;
            case "bolt-lightning":
                return <MajSolidBoltLightningIcon />;
            case "box-open":
                return <MajSolidBoxOpenIcon />;
            default:
                break;
        }
    };

    return (
        <section className="maj-section">
            <button className="maj-btn">
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
