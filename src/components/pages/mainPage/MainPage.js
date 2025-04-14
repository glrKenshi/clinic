import { Link } from "react-router"

import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import img from '../../../imgs/m2.png'
import angle from '../../../imgs/angle-small-right.png'
import stethoscope from '../../../imgs/stethoscope.svg'
import monitor from '../../../imgs/monitor.svg'
import user from '../../../imgs/user-circle-check.svg'
import shield from '../../../imgs/shield-check.svg'
import glass from '../../../imgs/list-magnifying-glass.svg'

import './mainPage.scss'

const MainPage = () => {
  return (
    <>
        <div className="container">
            
            <Header/>

            <main>
                <section className="hero">
                    <div className="hero__content">
                        <h1 className="section-heading hero__heading">Клиника мирового класса в&nbsp;Белгороде</h1>
                        <p className="hero__description">Вы&nbsp;ищете лучших специалистов для заботы о&nbsp;зрении своего ребенка? Добро пожаловать в&nbsp;нашу детскую офтальмологическую клинику! Мы&nbsp;предлагаем комплексное решение проблем со&nbsp;зрением у&nbsp;детей любого возраста</p>
                        <button className="hero__btn">Подробнее</button>
                    </div>
                    <img src={img} alt="" className="hero__img" />
                </section>

                <section className="about">
                    <h2 className="about__heading section-heading">Почему выбирают нас?</h2>

                    <ul className="about__list">
                        <li className="about__item">
                            <img className="about__icon" src={stethoscope} alt="" />
                            <h2 className="about__text-heading">Опытные специалисты</h2>
                            <p className="about__text-descr">Наши врачи регулярно проходят повышение квалификации и следят за последними достижениями в области офтальмологии</p>
                        </li>
                        <li className="about__item">
                            <img className="about__icon" src={monitor} alt="" />
                            <h2 className="about__text-heading">Современные технологии</h2>
                            <p className="about__text-descr">Мы используем передовое оборудование для точной диагностики и эффективного лечения</p>
                        </li>
                        <li className="about__item">
                            <img className="about__icon" src={user} alt="" />
                            <h2 className="about__text-heading">Индивидуальный подход</h2>
                            <p className="about__text-descr">Каждый ребенок уникален, и мы разрабатываем персональные планы лечения, учитывая особенности каждого маленького пациента</p>
                        </li>
                        <li className="about__item">
                            <img className="about__icon" src={shield} alt="" />
                            <h2 className="about__text-heading">Комфорт и безопасность</h2>
                            <p className="about__text-descr">Все процедуры проводятся в дружелюбной обстановке, где дети чувствуют себя защищенными и расслабленными</p>
                        </li>
                        <li className="about__item">
                            <img className="about__icon" src={glass} alt="" />
                            <h2 className="about__text-heading">Профилактика и диагностика</h2>
                            <p className="about__text-descr">Мы уделяем особое внимание профилактике и ранней диагностике, чтобы предотвратить возможные проблемы со зрением</p>
                        </li>
                    </ul>
                </section>

                <section className="doctors">
                    <div className="doctors__text-block">
                        <h2 className="section-heading doctors__heading">Наши специалисты</h2>
                        <a className="doctors__link">
                            <Link to='/doctors'>
                                <span className="doctors__link-text">Все специалисты</span>
                            </Link>
                            <img src={angle} alt="" />
                        </a>
                    </div>
                    <ul className="doctors__tabs">
                        <li className="doctors__tab doctors__tab--active">Офтальмологи</li>
                        <li className="doctors__tab">Физиотерапевты</li>
                        <li className="doctors__tab">Руководители</li>
                    </ul>
                    <ul className="doctors__list">
                        <li className="doctors__item">
                            <div className="doctors__item--top"></div>
                            <div className="doctors__item--bot">
                                <div className="doctors__item--name">Жерновая Лариса Михайловна</div>
                                <div className="doctors__item--descr">Детский офтальмолог</div>
                            </div>
                        </li>
                        <li className="doctors__item">
                            <div className="doctors__item--top"></div>
                            <div className="doctors__item--bot">
                                <div className="doctors__item--name">Жерновая Лариса Михайловна</div>
                                <div className="doctors__item--descr">Детский офтальмолог</div>
                            </div>
                        </li>
                        <li className="doctors__item">
                            <div className="doctors__item--top"></div>
                            <div className="doctors__item--bot">
                                <div className="doctors__item--name">Жерновая Лариса Михайловна</div>
                                <div className="doctors__item--descr">Детский офтальмолог</div>
                            </div>
                        </li>
                        <li className="doctors__item">
                            <div className="doctors__item--top"></div>
                            <div className="doctors__item--bot">
                                <div className="doctors__item--name">Жерновая Лариса Михайловна</div>
                                <div className="doctors__item--descr">Детский офтальмолог</div>
                            </div>
                        </li>
                    </ul>
                </section>


                <section className="service">
                    <h2 className="section-heading service__heading">
                        Наши услуги
                    </h2>
                    <p className="section-descr service__descr">
                        В клинике Энергия жизни представлены услуги для детей и взрослых. Запишитесь на прием к терапевту или узкому специалисту. Доктор выслушает вас, направит на обследование, а затем подберет индивидуальный план лечения. Если нужно, мы приедем к вам домой в любую точку города и осмотрим всю семью
                    </p>
                    <ul className="service__list">
                        <li className="service__item service__item--lenses">
                            <h3 className="service__item-heading">
                                Ночные&nbsp;линзы
                            </h3>
                            <Link to='/lenses'>
                                <button className="service__item-btn">Подробнее</button>
                            </Link>
                        </li>
                        <li className="service__item service__item--apparat">
                            <h3 className="service__item-heading">
                                Аппаратное&nbsp;лечение
                            </h3>
                            <Link to='/device'>
                                <button className="service__item-btn">Подробнее</button>
                            </Link>
                        </li>
                        <li className="service__item service__item--therapy">
                            <h3 className="service__item-heading">
                                Физиотерапия
                            </h3>
                            <Link to='/therapy'>
                                <button className="service__item-btn">Подробнее</button>
                            </Link>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
        <Footer />
    </>
  )
}

export default MainPage