import './MajUi.scss'

function MajUi(color: string, backgroundColor: string) {
    return (
        <div className='maj-ui' style={{ color: color, lineHeight : backgroundColor }}>
            MAJui
        </div>
    )
}

export default MajUi;