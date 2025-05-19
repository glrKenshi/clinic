import { useState } from 'react';
import Header from '../../header/Header'
import Footer from '../../footer/Footer';

import './servicePage.scss'

const TherapyPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, title: 'Прессотерапия (лимфодренаж)', content: 'Уникальная лечебно-косметологическая процедура, которую еще называют пневмомассажем и лимфодренажом. Она помогает за короткий срок вывести токсины и лишнюю влагу из периферических тканей (включая целлюлитные ткани!), активизирует кровообращение и поток лимфы'},
        { id: 1, title: 'Ударно-волновая терапия', content: 'Акустическая волна, которая доставляет энергию к болезненному месту и скелетным мышечным тканям в подострой, субхронической и хронической стадиях заболевания. Ударные волны характеризуются определенной формой импульса и давлением, которое обычно составляет от 1 до 5 бар. Значения энергии, применяемой на аппаратах BTL, позволяют мягко проводить терапию, при этом оказывая стимулирующий эффект и запуская заживляющие, репаративные и восстановительные процессы в биотканях. ' },
        { id: 2, title: 'Магнитотерапия', content: 'BTL представляет инновационный метод терапии — высокоинтенсивную магнитотерапию (SIS). Эта технология основана на положительном действии высокоинтенсивного магнитного поля на ткани человеческого организма. Терапевтические эффекты данного вида лечения включают в себя устранение боли, ускорение заживления переломов, снятие мышечного напряжения и повышение подвижности суставов.' },
        { id: 3, title: 'Лазерная терапия', content: 'Высокоинтенсивная лазерная терапия (HIL) — это уникальная инновационная технология, позволяющая оказывать безболезненное неинвазивное воздействие на ткани и органы человека. Приборы ХИЛ компании BTL показывают отличные практические результаты и широко применяются в физиотерапии, ортопедии, спортивной медицине, неврологии.' },
        { id: 4, title: 'Столы для лечения заболеваний позвоночника ORMED', content: 'Позволяет восстановить утраченную подвижность позвоночника, устранить боли в спине, восстановить глубокие околопозвоночные мышцы, нормализовать трофику внутренних органов. Входит в состав комплекса реабилитации после COVID-19. «ОРМЕД-кинезо» — установка для кинезотерапии позвоночника, уникальная разработка НВП «Орбита», не имеющая аналогов. При лечении на «ОРМЕД-кинезо» происходит непринудительное вытяжение позвоночника в пассивном режиме. Ритмичные движения аппарата вверх и вниз заставляют работать участки позвоночника, не разрабатываемые в обычной жизни. Позвоночник растягивается, раскрывается грудная клетка, облегчается дыхание. В организм поступает мощный поток кислорода. Улучшается кровообращение, активнее поступают питательные вещества из крови, усиливается питание головного мозга. Общее состояние и самочувствие значительно улучшается. Уходят головные боли и боли в спине. Проведенные исследования подтверждают и улучшение сексуальной функции. Человек становится гораздо активнее, улучшается качество жизни' },
      ];

  return (
    <>
        <div className="container">
            <Header />
            <main className="service-page">
                <section className="service-page__main">
                    <div className="service-page__main__img therapy-page__main__img" />
                    <div className="service-page__main__text">
                        <h2 className="service-page__main__heading section-heading">
                            Физеотерапия
                        </h2>
                        <p className="service-page__main__descr">
                            Эффективные профилактика и лечение различных заболеваний — это комплекс медицинских мероприятий, которые определяются индивидуально. Так как физиотерапия не предполагает хирургическое вмешательство и применение медикаментов, врачу необходимо подбирать каждому из пациентов, даже со схожими проблемами, персональную программу. В нашей клинике широкий спектр терапевтических процедур. У нас есть уникальное оборудование для применения разных методик лечения и профилактики. Врач расскажет о доступных вариантах и предложит самые результативные из них в вашем случае.
                        </p>
                        <button className="service-page__main__btn">Записаться на приём</button>
                    </div>
                </section>
                <section className="service-page__about therapy-page__about">
                    <h2 className="therapy-page__about__heading section-heading">Что включает процедура</h2>
                    <div className="therapy-page__tabs-container">
                        <div className="therapy-page__tabs-list">
                            {tabs.map((tab) => (
                                <div
                                key={tab.id}
                                className={`therapy-page__tab-button ${
                                    activeTab === tab.id ? 'active' : ''
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                                >
                                {tab.title}
                                </div>
                            ))}
                        </div>
                        <div className="therapy-page__tab-content" key={activeTab}>
                            <h2>{tabs[activeTab].title}</h2>
                            <p>{tabs[activeTab].content}</p>
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

export default TherapyPage