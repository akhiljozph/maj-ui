interface MajButtonProps {
    link?: string,
    children: string,
}

function MajButton(props: MajButtonProps) {

    const btnClickFn = (link?: string) => {
        if (checkForURLValidity(link)) {
            console.log('IF')
            window.open(link, "_blank");
        }
        console.log('ELSE');
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
        <button onClick={() => btnClickFn(props.link)}>{ props.children }</button>
    )
}

export default MajButton;