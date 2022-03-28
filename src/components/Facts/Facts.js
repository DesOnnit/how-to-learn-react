import HeaderBlock from "../HeaderBlock/HeaderBlock";
import Table from "../Table/Table";
import './Facts.css';
export default function Facts(props) {
    return (
        <div className="facts">
            <HeaderBlock
                title={props.data.title}
                subtitle={props.data.subtitle}
            />
            <Table
                table={props.table} />
        </div>
    )
}