import Card from '../Card/Card';
import './CardList.css'
export default function CardList (props) {
    return ( 
    <div className="card-list">
        {props.card.map((c)=>(
           <Card
           key={c.id}
           card={c}/> 
        ))}
    </div>)
   
}