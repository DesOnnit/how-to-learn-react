import HeaderBlock from "../HeaderBlock/HeaderBlock";
import './Resources.css'
export default function Resources(props) {
    return (
        <div className="resource">
            <HeaderBlock
                title={props.data.title}
                subtitle={props.data.subtitle}
            />
            <div className="resource__links">
                {props.links.map((link) => (
                    <a target="blank" href={link.href}><img className="resource__link" alt={link.alt} src={link.src} /></a>
                ))}
            </div>
        </div>
    )
}