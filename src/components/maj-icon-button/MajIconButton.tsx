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
    MajLightArrowUpIcon,
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
    MajSolidArrowUpIcon,
    MajSolidBackwardStepIcon,
    MajSolidBarcodeReadIcon,
    MajSolidBarsIcon,
    MajSolidBellIcon,
    MajSolidBoltLightningIcon,
    MajSolidBoxOpenIcon,
    MajSolidThreeSixtyIcon,
    MajLightBugIcon,
    MajSolidBugIcon,
    MajLightCalendarDaysIcon,
    MajSolidCalendarDaysIcon,
    MajLightCameraViewfinderIcon,
    MajSolidCameraViewfinderIcon,
    MajLightCaretDownIcon,
    MajSolidCaretDownIcon,
    MajLightCaretLeftIcon,
    MajSolidCaretLeftIcon,
    MajLightCaretRightIcon,
    MajSolidCaretRightIcon,
    MajSolidCaretUpIcon,
    MajLightCaretUpIcon,
    MajLightCartFlatbedBoxesIcon,
    MajSolidCartFlatbedBoxes,
    MajLightCartShoppingIcon,
    MajSolidCartShoppingIcon,
    MajLightChairOfficeIcon,
    MajSolidChairOfficeIcon,
    MajLightChartColumnIcon,
    MajSolidChartColumnIcon,
    MajLightChartSimpleIcon,
    MajSolidChartSimpleIcon,
    MajLightCheckIcon,
    MajSolidCheckIcon,
    MajSolidCircleExclamationIcon,
    MajLightCircleExclamationIcon,
    MajLightCircleInfoIcon,
    MajSolidCircleInfoIcon,
    MajLightCircleMinusIcon,
    MajSolidCircleMinusIcon,
} from "../maj-icon";
import "./MajIconButton.scss";
import { MajLightCircleQuestionIcon } from "../maj-icon/light-icon/circle-question";
import { MajSolidCircleQuestionIcon } from "../maj-icon/solid-icon/circle-question";

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
                return <MajLightArrowUpIcon />;
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
            case "bug":
                return <MajLightBugIcon />;
            case "calendar-boys":
                return <MajLightCalendarDaysIcon />;
            case "camera-viewfinder":
                return <MajLightCameraViewfinderIcon />;
            case "caret-down":
                return <MajLightCaretDownIcon />;
            case "caret-left":
                return <MajLightCaretLeftIcon />;
            case "caret-right":
                return <MajLightCaretRightIcon />;
            case "caret-up":
                return <MajLightCaretUpIcon />;
            case "cart-flatbed-boxes":
                return <MajLightCartFlatbedBoxesIcon />;
            case "cart-shopping":
                return <MajLightCartShoppingIcon />;
            case "chair-office":
                return <MajLightChairOfficeIcon />;
            case "chart-column":
                return <MajLightChartColumnIcon />;
            case "chart-simple":
                return <MajLightChartSimpleIcon />;
            case "check":
                return <MajLightCheckIcon />;
            case "circle-exclamation":
                return <MajLightCircleExclamationIcon />;
            case "circle-info":
                return <MajLightCircleInfoIcon />;
            case "circle-minus":
                return <MajLightCircleMinusIcon />;
            case "circle-question":
                return <MajLightCircleQuestionIcon />;
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
            case "arrow-up":
                return <MajSolidArrowUpIcon />;
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
            case "bug":
                return <MajSolidBugIcon />;
            case "calendar-days":
                return <MajSolidCalendarDaysIcon />;
            case "camera-viewfinder":
                return <MajSolidCameraViewfinderIcon />;
            case "caret-icon":
                return <MajSolidCaretDownIcon />;
            case "caret-left":
                return <MajSolidCaretLeftIcon />;
            case "caret-right":
                return <MajSolidCaretRightIcon />;
            case "caret-up":
                return <MajSolidCaretUpIcon />;
            case "cart-flatbed-boxes":
                return <MajSolidCartFlatbedBoxes />;
            case "cart-shopping":
                return <MajSolidCartShoppingIcon />;
            case "chair-office":
                return <MajSolidChairOfficeIcon />;
            case "chart-column":
                return <MajSolidChartColumnIcon />;
            case "chart-simple":
                return <MajSolidChartSimpleIcon />;
            case "check":
                return <MajSolidCheckIcon />;
            case "circle-exclamation":
                return <MajSolidCircleExclamationIcon />;
            case "circle-info":
                return <MajSolidCircleInfoIcon />;
            case "circle-minus":
                return <MajSolidCircleMinusIcon />;
            case "circle-question":
                return <MajSolidCircleQuestionIcon />;
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
