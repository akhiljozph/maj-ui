import './MajButton.scss';

interface MajButtonProps {
    basic?: boolean,
    children?: string,
    danger?: boolean,
    default?: boolean,
    info?: boolean,
    link?: boolean,
    primary?: boolean,
    success?: boolean,
    url?: string,
    warning?: boolean,
}

function MajButton(props: MajButtonProps) {

    const btnClickFn = (url?: string) => {
        if (checkForURLValidity(url)) {
            window.open(url, "_blank");
        }
    }

    const checkForURLValidity = (url?: string) => {
        if (url) {
            const pattern = new RegExp('^(https?:\\/\\/)?'+
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
            '((\\d{1,3}\\.){3}\\d{1,3}))'+
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
            '(\\?[;&a-z\\d%_.~+=-]*)?'+
            '(\\#[-a-z\\d_]*)?$','i');

            return !!pattern.test(url);
        }

        return false;
    }

    return (
        <div>
            { props && props.link ?
                <a className='maj-btn-link'>{props.children}</a>
                : <button type="button" className="maj-btn maj-btn-default" onClick={() => btnClickFn(props.url)}>{ props.children }</button>
            }
            
        </div>
    )
}

export default MajButton;