import './HeaderBlock.css'
export default function HeaderBlock({ title, subtitle, tag }) {
    return (
        <div className={`header-block__${tag}`}>
            <p className="header-block__title">{title}</p>
            <p className="header-block__subtitle">{subtitle}</p>
        </div>
    )
}