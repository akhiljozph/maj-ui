// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function MajButton(props: any) {

    const btnClickFn = (link: string) => {
        window.open(link, "_blank");
    }

    return (
        <button onClick={() => btnClickFn(props.link)}>{ props.children }</button>
    )
}

export default MajButton;