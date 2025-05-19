import { useState } from 'react';

import Header from '../../header/Header'
import Footer from '../../footer/Footer';

import './servicePage.scss'

import amblicorImg from '../../../imgs/devices/amblicor.jpg'
import macdelImg from '../../../imgs/devices/macdel.jpg'
import sakkadaImg from '../../../imgs/devices/sakkada.jpg'
import relaxImg from '../../../imgs/devices/relax.jpg'
import pleoptikaImg from '../../../imgs/devices/pleoptika.jpg'
import vizotronikImg from '../../../imgs/devices/vizotronik.jpg'
import sinoptoforImg from '../../../imgs/devices/sinoptofor.jpg'
import rucheekImg from '../../../imgs/devices/rucheek.jpg'
import lastImg from '../../../imgs/devices/last.jpg'
import amoatosImg from '../../../imgs/devices/amoatos.jpg'

const DevicePage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { 
            id: 0, 
            title: 'Амблиокор', 
            url: amblicorImg, 
            text: 'Аппарат для лечения амблиопии и нарушений бинокулярного зрения с помощью видео-тренинга на основе биологической обратной связи (БОС). Пациент смотрит фильм или мультфильм, а устройство корректирует работу зрительной системы.' 
        },
        { 
            id: 1, 
            title: 'Макдэл-09', 
            url: macdelImg, 
            text: 'Лазерный стимулятор, применяемый для лечения амблиопии, дистрофии сетчатки и зрительного утомления. Использует низкоинтенсивное лазерное излучение для стимуляции сетчатки.' 
        },
        { 
            id: 2, 
            title: 'Сакада', 
            url: sakkadaImg, 
            text: 'Аппарат для тренировки глазодвигательных мышц при нистагме и косоглазии. Основан на слежении за движущимися световыми объектами, улучшая координацию глаз.' 
        },
        { 
            id: 3, 
            title: 'Программа Релакс', 
            url: relaxImg, 
            text: 'Компьютерная программа для снятия спазма аккомодации с использованием волновых и цветовых стимулов. Помогает расслабить глазные мышцы при зрительном утомлении.' 
        },
        { 
            id: 4, 
            title: 'Программа плеоптика', 
            url: pleoptikaImg, 
            text: 'Компьютерная программа для лечения амблиопии у детей. Включает игровые упражнения со световыми и контрастными стимулами, стимулируя "ленивый глаз".' 
        },
        { 
            id: 5, 
            title: 'Визотроник', 
            url: vizotronikImg, 
            text: 'Комплекс для снятия зрительного утомления и лечения миопии. Сочетает линзы, призмы и световые эффекты, тренируя аккомодацию и улучшая кровообращение.' 
        },
        { 
            id: 6, 
            title: 'Синоптофор', 
            url: sinoptoforImg, 
            text: 'Аппарат для диагностики и лечения косоглазия. Разделяет поля зрения для каждого глаза, тренируя бинокулярное зрение и улучшая способность к слиянию изображений.' 
        },
        { 
            id: 7, 
            title: 'Ручеёк', 
            url: rucheekImg, 
            text: 'Аппарат для тренировки аккомодации с динамически меняющимися световыми метками. Эффективен при миопии, спазме аккомодации и астенопии.' 
        },
        { 
            id: 8, 
            title: 'Ласт', 
            url: lastImg, 
            text: 'Лазерный амблиостимулятор, применяемый при амблиопии и дистрофических изменениях сетчатки. Использует низкоинтенсивное лазерное излучение для стимуляции.' 
        },
        { 
            id: 9, 
            title: 'АМО-АТОС', 
            url: amoatosImg, 
            text: 'Аппарат магнитотерапии для лечения амблиопии, близорукости и воспалительных заболеваний глаз. Действует с помощью бегущего магнитного поля, улучшая кровообращение и трофику тканей.' 
        }
    ];

  return (
    <>
        <div className="container">
            <Header />
            <main className="service-page">
                <section className="service-page__main">
                    <div className="service-page__main__img device-page__main__img" />
                    <div className="service-page__main__text">
                        <h2 className="service-page__main__heading section-heading">
                            Аппаратное лечение
                        </h2>
                        <p className="service-page__main__descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa commodi repellendus beatae odit sunt doloremque necessitatibus rem id perferendis, quis, quam facilis molestiae aliquam dolor nostrum delectus? Adipisci, sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa commodi repellendus beatae odit sunt doloremque necessitatibus rem id perferendis, quis, quam facilis molestiae aliquam dolor nostrum delectus? Adipisci, sed.
                        </p>
                        <button className="service-page__main__btn">Записаться на приём</button>
                    </div>
                </section>
                <section className="service-page__about device-page__about">
                    <h2 className="device-page__about__heading section-heading">Аппараты на которых мы лечим</h2>
                    <div className="device-page__tabs-container">
                        <div className="device-page__tabs-list">
                            {tabs.map((tab) => (
                                <div
                                key={tab.id}
                                className={`device-page__tab-button ${
                                    activeTab === tab.id ? 'active' : ''
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                                >
                                {tab.title}
                                </div>
                            ))}
                        </div>
                        <div className="device-page__tab-content" key={activeTab}>
                            <img
                                src={tabs[activeTab].url}
                                alt={tabs[activeTab].title}
                            />
                            <p>{tabs[activeTab].text}</p>
                        </div>
                    </div>
                </section>
                <section className="service-page__expl">
                    <h2 className="service-page__expl__heading section-heading">Примеры лечения</h2>
                    <ul className="service-page__expl__list">
                        <li className="service-page__expl__item">
                            <div src="" alt="" className="service-page__expl__img" />
                            <div className="service-page__expl__name">Фролова Светлана Сергеевна</div>
                            <div className="service-page__expl__role">Офтальмолог</div>
                            <button className="service-page__expl__btn">Записаться</button>
                        </li>
                        <li className="service-page__expl__item">
                            <div src="" alt="" className="service-page__expl__img" />
                            <div className="service-page__expl__name">Фролова Светлана Сергеевна</div>
                            <div className="service-page__expl__role">Офтальмолог</div>
                            <button className="service-page__expl__btn">Записаться</button>
                        </li>
                    </ul>
                </section>
                <section className="service-page__doc">
                    <h2 className="service-page__doc__heading section-heading">
                        Наши специалисты
                    </h2>
                    <ul className="service-page__doc__list">
                        <li className="service-page__doc__item">
                            <div className="service-page__doc__content">
                                <div className="service-page__doc__img" />
                                <div className="service-page__doc__text">
                                    <div className="service-page__doc__name">Фролова Татьяна Юрьевна</div>
                                    <div className="service-page__doc__role">Офтальмолог</div>
                                    <button className="service-page__doc__btn">Записаться</button>
                                </div>
                            </div>
                        </li>
                        <li className="service-page__doc__item">
                            <div className="service-page__doc__content">
                                <div className="service-page__doc__img" />
                                <div className="service-page__doc__text">
                                    <div className="service-page__doc__name">Фролова Татьяна Юрьевна</div>
                                    <div className="service-page__doc__role">Офтальмолог</div>
                                    <button className="service-page__doc__btn">Записаться</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
        <Footer />
    </>
  )
}

export default DevicePage