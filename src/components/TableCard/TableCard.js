import './TableCard.css'
export default function TableCard(props) {
    return (
        <div className="table-card">
            <p className="table-card__title">{props.card.title}</p>
            <p className="table-card__subtitle">{props.card.subtitle}</p>
        </div>
    )
}