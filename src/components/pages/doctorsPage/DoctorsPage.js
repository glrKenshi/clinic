import Header from "../../header/Header"
import Footer from "../../footer/Footer"

import './doctorsPage.scss'

const DoctorsPage = () => {
    return (
    <>
        <div className="container">       
            <Header />

            <main className="doc-page">
                <h2 className="section-heading doc-page__heading">Наши специалисты</h2>
                <div className="doc-page__wrapper">
                    
                    <div className="section-heading doc-page__tab">Руководители</div>
                    <div className="doc-page__list">

                        <div className="doc-page__item">
                            <div className="doc-page__img"></div>
                            <div className="doc-page__content">
                                <div className="doc-page__name">Жернова Лариса Петровна</div>
                                <div className="doc-page__role">Руководитель</div>
                                <div className="doc-page__exp">Cтаж: 12 лет</div>
                                <button className="doc-page__btn">Подробнее</button>
                            </div>
                        </div>

                        <div className="doc-page__item">
                            <div className="doc-page__img"></div>
                            <div className="doc-page__content">
                                <div className="doc-page__name">Жернова Лариса Петровна</div>
                                <div className="doc-page__role">Руководитель</div>
                                <div className="doc-page__exp">Cтаж: 12 лет</div>
                                <button className="doc-page__btn">Подробнее</button>
                            </div>
                        </div>

                        <div className="doc-page__item">
                            <div className="doc-page__img"></div>
                            <div className="doc-page__content">
                                <div className="doc-page__name">Жернова Лариса Петровна</div>
                                <div className="doc-page__role">Руководитель</div>
                                <div className="doc-page__exp">Cтаж: 12 лет</div>
                                <button className="doc-page__btn">Подробнее</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>

        <Footer />
    </>
)
}

export default DoctorsPage