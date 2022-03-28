import CardList from '../CardList/CardList.js'
import HeaderBlock from '../HeaderBlock/HeaderBlock.js'
export default function Techniques(props) {
    return (
        <>
            <HeaderBlock
                title={props.techniques.title}
                subtitle={props.techniques.subtitle} />
            <CardList
                card={props.data}
            />
        </>
    )
}
