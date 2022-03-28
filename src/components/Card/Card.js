import './Card.css';
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.card.src} className="card__img" alt={props.card.title} />
            <p className="card__title">{props.card.title}</p>
            <p className="card__subtitle">{props.card.subtitle}</p>
        </div>
    )
}