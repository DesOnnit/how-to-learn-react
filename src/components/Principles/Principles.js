import HeaderBlock from "../HeaderBlock/HeaderBlock";
import Table from "../Table/Table";
import './Principles.css'
export default function Principles (props) {
    return (
        <div className="principles">
            <HeaderBlock
            tag='principles'
            title={props.data.title}
            subtitle={props.data.subtitle}/>
            <Table
            table={props.principles}
            tag='principles'
            />
            <div className="principles__figure"/>
        </div>
    )
}