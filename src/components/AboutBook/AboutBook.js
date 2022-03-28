import './AboutBook.css'
export default function AboutBook(props) {
    return (
        <div className="about-book">
            <p className="about-book__title">{props.data.title}</p>
            <p className="about-book__subtitle">{props.data.subtitle}</p>
            <p className="about-book__quote">{props.data.paragraph_one}</p>
            <p className="about-book__quote-author">{props.data.paragraph_two}</p>
            <p className="about-book__author-subline">{props.data.paragraph_three}</p>
            <div className="about-book__container">
                <div className="about-book__pic" />
                <a target="blank" href="https://www.ozon.ru/product/ves-mir-shkola-preobrazovannoe-obrazovanie-162999126/?sh=AcqES0L3Hg" className="about-book__buy">Купить книгу &rarr;</a>
            </div>
        </div>
    )
}