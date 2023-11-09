import './MajUi.scss';

interface MajUiProps {
    color: string,
    backgroundColor: string
}

function MajUi(props: MajUiProps) {

    return (
        <div className='maj-ui' style={{ color: props.color, backgroundColor: props.backgroundColor }}>
            MAJui
        </div>
    )
}
export default MajUi;

MajUi.defaultProps = {
    color: '#ffc40c',
    backgroundColor: '#000000',
}