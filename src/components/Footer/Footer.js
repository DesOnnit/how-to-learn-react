import Logo from '../../utils/images/logo_place_footer.svg'
import Navigation from '../Navigation/Navigation';
import './Footer.css';
export default function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__copyright">
                    <img src={Logo} alt="" className="footer__logo" />
                    <p className="footer__author">&copy; 2022. Вадим Коротков</p>
                </div>
                <div className="footer__nav">
                    <div className="footer__nav__links">
                        <p className="footer__nav__links__title">О Практикуме</p>
                        {props.links.slice(0, 3).map((link) => (
                            <Navigation
                                key={link.id}
                                link={link} />
                        ))}
                    </div>
                    <div className="footer__nav__links">
                        <p className="footer__nav__links__title">Соцсети</p>
                        {props.links.slice(3, 6).map((link) => (
                            <Navigation
                                key={link.id}
                                link={link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}