import HeaderBlock from "../HeaderBlock/HeaderBlock";
import './Video.css'
export default function Video(props) {
    return (
        <div className="video">
            <HeaderBlock
                title={props.header.title}
                subtitle={props.header.subtitle}
            />
            <div className="video__iframes">
                <iframe className="video__iframe" src="https://www.youtube.com/embed/5MgBikgcWnY" />
                <iframe className="video__iframe" src="https://www.youtube.com/embed/arj7oStGLkU" />
            </div>
        </div>
    )
}