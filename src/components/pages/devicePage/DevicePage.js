import { useState } from 'react';

import Header from '../../header/Header'
import Footer from '../../footer/Footer';

import './devicePage.scss'

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

import img1 from '../../../imgs/devices/img1.jpg'
import img2 from '../../../imgs/devices/img2.jpg'
import img3 from '../../../imgs/devices/img3.jpg'
import img4 from '../../../imgs/devices/img4.jpg'

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
            <main className="device-page">
                <section className="device-page__main">
                    <div className="device-page__main__img" />
                    <div className="device-page__main__text">
                        <h2 className="device-page__main__heading section-heading">
                            Аппаратное лечение
                        </h2>
                        <p className="device-page__main__descr">
                            Это нехирургический метод коррекции и улучшения зрения c помощью специальных приборов и тренажеров. Оно применяется как y детей, так и y взрослых для лечения различных нарушений зрения, укрепления глазных мышц и улучшения кровоснабжения глаз. Аппаратное лечение - безопасная альтернатива или дополнение к очкам, линзам и операциям
                        </p>
                        <button className="device-page__main__btn">Записаться на приём</button>
                    </div>
                </section>
                <section className="device-page__about">
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
                            {/* <p>{tabs[activeTab].text}</p> */}
                            <img
                                src={tabs[activeTab].url}
                                alt={tabs[activeTab].title}
                                className='device-page__tab-img'
                            />
                        </div>
                    </div>
                </section>
                <section className="device-page__expl">
                    <h2 className="device-page__expl__heading section-heading">Кабинет детского врача-офтальмолога</h2>
                    <div className="device-page__expl__wrapper">
                        <img src={img1} alt="Кабинет офтальмолога" className='device-page__expl__img'/>
                        <img src={img2} alt="Кабинет офтальмолога" className='device-page__expl__img'/>
                        <img src={img3} alt="Кабинет офтальмолога" className='device-page__expl__img'/>
                        <img src={img4} alt="Кабинет офтальмолога" className='device-page__expl__img'/>
                    </div>
                </section>
            </main>
        </div>
        <Footer />
    </>
  )
}

export default DevicePage