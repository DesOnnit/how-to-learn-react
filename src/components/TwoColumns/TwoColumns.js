import './TwoColumns.css'
export default function TwoColumns(props) {
    return (
        <div className="two-columns">
            <p className="two-columns__title">{props.data.title}</p>
            <div className="two-columns__main-text">
                <p className="two-columns__main-text__paragraph">{props.data.paragraph_one}</p>
                <p className="two-columns__main-text__paragraph"><span className="two-columns__main-text__paragraph_span">{props.data.span_accent}</span>{props.data.paragraph_two}</p>
                <p className="two-columns__main-text__paragraph">{props.data.paragraph_three}</p>
            </div>
        </div>
    )
}
