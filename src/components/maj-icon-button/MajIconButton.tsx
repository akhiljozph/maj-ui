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
    MajLightCircleIcon,
    MajLightCircleUserIcon,
    MajLightCircleXMarkIcon,
    MajLightClipboardListIcon,
    MajLightClockIcon,
    MajLightCommentIcon,
    MajLightCreditCardIcon,
    MajLightCrossHairsIcon,
    MajSolidCircleIcon,
    MajSolidCircleUserIcon,
    MajSolidCircleXMarkIcon,
    MajSolidClipboardListIcon,
    MajSolidClockIcon,
    MajSolidCommentIcon,
    MajSolidCreditCardIcon,
    MajSolidCrossHairsIcon,
    MajSolidDatabaseIcon,
    MajLightDatabaseIcon,
    MajLightEllipsisVerticalIcon,
    MajSolidEllipsisVerticalIcon,
    MajLightEllipsisIcon,
    MajSolidEllipsisIcon,
    MajLightEnvelopeIcon,
    MajSolidEnvelopeIcon,
    MajSolidCircleQuestionIcon,
    MajLightCircleQuestionIcon,
    MajLightEqualsIcon,
    MajSolidEqualsIcon,
    MajLightExpandIcon,
    MajSolidExpandIcon,
    MajLightEyeSlashIcon,
    MajSolidEyeSlashIcon,
    MajSolidEyeIcon,
    MajLightEyeIcon,
    MajSolidFileArrowDownIcon,
    MajLightFileArrowDownIcon,
    MajLightFileArrowUpIcon,
    MajSolidFileArrowUpIcon,
    MajSolidFileInvoiceIcon,
    MajLightFileInvoiceIcon,
    MajSolidFilterIcon,
    MajLightFlashIcon,
    MajSolidFlashIcon,
    MajLightForwardStepIcon,
    MajSolidForwardStepIcon,
    MajSolidGaugeIcon,
    MajLightGaugeIcon,
    MajLightGearIcon,
    MajSolidGearIcon,
    MajLightGearsIcon,
    MajSolidGearsIcon,
    MajLightGlobeIcon,
    MajSolidGlobeIcon,
    MajSolidGridIcon,
    MajLightGridIcon,
    MajSolidGridHorizontalIcon,
    MajLightGridHorizontalIcon,
    MajLightGripDotsIcon,
    MajSolidGripDotsIcon,
    MajSolidHeadsetIcon,
    MajLightHeadsetIcon,
    MajLightHeartPulseIcon,
    MajSolidHeartPulseIcon,
    MajLightFilterIcon,
    MajLightCircleCheckIcon,
    MajSolidCircleCheckIcon,
    MajLightHouseIcon,
    MajSolidHouseIcon,
    MajLightLocationDotIcon,
    MajSolidLocationDotIcon,
} from "../maj-icon";
import "./MajIconButton.scss";
import { MajSolidLockIcon } from "../maj-icon/solid-icon/lock";
import { MajLightLockIcon } from "../maj-icon/light-icon/lock";

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
            case "calendar-days":
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
            case "circle-check":
                return <MajLightCircleCheckIcon />;
            case "circle-exclamation":
                return <MajLightCircleExclamationIcon />;
            case "circle-info":
                return <MajLightCircleInfoIcon />;
            case "circle-minus":
                return <MajLightCircleMinusIcon />;
            case "circle-question":
                return <MajLightCircleQuestionIcon />;
            case "circle":
                return <MajLightCircleIcon />;
            case "circle-user":
                return <MajLightCircleUserIcon />;
            case "circle-x-mark":
                return <MajLightCircleXMarkIcon />;
            case "clipboard-list":
                return <MajLightClipboardListIcon />;
            case "clock":
                return <MajLightClockIcon />;
            case "comment":
                return <MajLightCommentIcon />;
            case "credit-card":
                return <MajLightCreditCardIcon />;
            case "cross-hairs":
                return <MajLightCrossHairsIcon />;
            case "database":
                return <MajLightDatabaseIcon />;
            case "ellipsis-vertical":
                return <MajLightEllipsisVerticalIcon />;
            case "ellipsis":
                return <MajLightEllipsisIcon />;
            case "envelope":
                return <MajLightEnvelopeIcon />;
            case "equals":
                return <MajLightEqualsIcon />;
            case "expand":
                return <MajLightExpandIcon />;
            case "eye-slash":
                return <MajLightEyeSlashIcon />;
            case "eye":
                return <MajLightEyeIcon />;
            case "file-arrow-down":
                return <MajLightFileArrowDownIcon />;
            case "file-arrow-up":
                return <MajLightFileArrowUpIcon />;
            case "file-invoice":
                return <MajLightFileInvoiceIcon />;
            case "filter":
                return <MajLightFilterIcon />;
            case "flash":
                return <MajLightFlashIcon />;
            case "forward-step":
                return <MajLightForwardStepIcon />;
            case "gauge":
                return <MajLightGaugeIcon />;
            case "gear":
                return <MajLightGearIcon />;
            case "gears":
                return <MajLightGearsIcon />;
            case "globe":
                return <MajLightGlobeIcon />;
            case "grid":
                return <MajLightGridIcon />;
            case "grid-horizontal":
                return <MajLightGridHorizontalIcon />;
            case "grip-dots":
                return <MajLightGripDotsIcon />;
            case "headset":
                return <MajLightHeadsetIcon />;
            case "heart-pulse":
                return <MajLightHeartPulseIcon />;
            case "house":
                return <MajLightHouseIcon />;
            case "location-dot":
                return <MajLightLocationDotIcon />;
            case "lock":
                return <MajLightLockIcon />;
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
            case "caret-down":
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
            case "circle-check":
                return <MajSolidCircleCheckIcon />;
            case "circle-exclamation":
                return <MajSolidCircleExclamationIcon />;
            case "circle-info":
                return <MajSolidCircleInfoIcon />;
            case "circle-minus":
                return <MajSolidCircleMinusIcon />;
            case "circle-question":
                return <MajSolidCircleQuestionIcon />;
            case "circle":
                return <MajSolidCircleIcon />;
            case "circle-user":
                return <MajSolidCircleUserIcon />;
            case "circle-x-mark":
                return <MajSolidCircleXMarkIcon />;
            case "clipboard-list":
                return <MajSolidClipboardListIcon />;
            case "clock":
                return <MajSolidClockIcon />;
            case "comment":
                return <MajSolidCommentIcon />;
            case "credit-card":
                return <MajSolidCreditCardIcon />;
            case "cross-hairs":
                return <MajSolidCrossHairsIcon />;
            case "database":
                return <MajSolidDatabaseIcon />;
            case "ellipsis-vertical":
                return <MajSolidEllipsisVerticalIcon />;
            case "ellipsis":
                return <MajSolidEllipsisIcon />;
            case "envelope":
                return <MajSolidEnvelopeIcon />;
            case "equals":
                return <MajSolidEqualsIcon />;
            case "expand":
                return <MajSolidExpandIcon />;
            case "eye-slash":
                return <MajSolidEyeSlashIcon />;
            case "eye":
                return <MajSolidEyeIcon />;
            case "file-arrow-down":
                return <MajSolidFileArrowDownIcon />;
            case "file-arrow-up":
                return <MajSolidFileArrowUpIcon />;
            case "file-invoice":
                return <MajSolidFileInvoiceIcon />;
            case "filter":
                return <MajSolidFilterIcon />;
            case "flash":
                return <MajSolidFlashIcon />;
            case "forward-step":
                return <MajSolidForwardStepIcon />;
            case "gauge":
                return <MajSolidGaugeIcon />;
            case "gear":
                return <MajSolidGearIcon />;
            case "gears":
                return <MajSolidGearsIcon />;
            case "globe":
                return <MajSolidGlobeIcon />;
            case "grid":
                return <MajSolidGridIcon />;
            case "grid-horizontal":
                return <MajSolidGridHorizontalIcon />;
            case "grip-dots":
                return <MajSolidGripDotsIcon />;
            case "headset":
                return <MajSolidHeadsetIcon />;
            case "heart-pulse":
                return <MajSolidHeartPulseIcon />;
            case "house":
                return <MajSolidHouseIcon />;
            case "location-dot":
                return <MajSolidLocationDotIcon />;
            case "lock":
                return <MajSolidLockIcon />;
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
