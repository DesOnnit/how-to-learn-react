import './Navigation.css'
export default function Navigation(props) {
    return (
        <>
            <a className="navigation__link" target="blank" href={props.link.href}>{props.link.title}</a>
        </>
    )
}