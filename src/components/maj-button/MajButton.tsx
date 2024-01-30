import './MajButton.scss';

interface MajButtonProps {
    link?: string,
    children?: string,
    primary?: boolean,
}

function MajButton(props: MajButtonProps) {

    const btnClickFn = (link?: string) => {
        if (checkForURLValidity(link)) {
            window.open(link, "_blank");
        }
    }

    const checkForURLValidity = (link?: string) => {
        if (link) {
            const pattern = new RegExp('^(https?:\\/\\/)?'+
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
            '((\\d{1,3}\\.){3}\\d{1,3}))'+
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
            '(\\?[;&a-z\\d%_.~+=-]*)?'+
            '(\\#[-a-z\\d_]*)?$','i');

            return !!pattern.test(link);
        }

        return false;
    }

    return (
        <button type="button" className="maj-btn maj-btn-default" onClick={() => btnClickFn(props.link)}>{ props.children }</button>
    )
}

export default MajButton;