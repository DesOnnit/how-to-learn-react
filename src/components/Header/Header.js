import HeaderImage from '../../utils/images/header-image.png';
import Logo from '../../utils/images/logo_place_header.svg'
import './Header.css';
export default function Header(props) {
    return (
        <div className="header">
            <div className="header__info">
                <img src={Logo} alt="Логотоп Яндекс Практикум" className="header__logo" />
                <h1 className="header__title">{props.headerInfo.title}</h1>
                <p className="header__subtitle">{props.headerInfo.subtitle}
                    <a className="header__link" href="https://learn.javascript.ru/" target='blank'> Узнать&rarr;</a>
                </p>
            </div>
            <img className="header__illustration" src={HeaderImage} alt="Опять двойка" />
            <div className="header__square-pic rotation"></div>
        </div>
    )
}