import TableCard from "../TableCard/TableCard";
import './Table.css';
export default function Table(props) {
    return (
        <div className={props.tag?"table__principles":"table"}>
            {props.table.map((card) => (
                <TableCard
                    key={card.id}
                    card={card} />
            ))}
        </div>
    )
}