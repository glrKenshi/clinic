import { useState } from 'react';
import Header from '../../header/Header'
import Footer from '../../footer/Footer';

import './servicePage.scss'

const LensesPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const toggleAccordion = (index) => {
      if (isAnimating) return;
      
      if (activeIndex === index) {
        setIsAnimating(true);
        setActiveIndex(null);
        setTimeout(() => setIsAnimating(false), 300); 
      } else {
        if (activeIndex !== null) {
          setIsAnimating(true);
          setActiveIndex(null);
          setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
          }, 300);
        } else {
          setActiveIndex(index);
        }
      }
    };

    const accordionItems = [
        {
          title: "Что такое ортокератология",
          content: "Ортокератология (ок-терапия) — это единственный метод коррекции зрения, благодаря которому не нужно использовать очки или контактные линзы, или прибегать к хирургии для того, чтобы иметь отличное зрение. Специальные контактные линзы для ок-терапии используются только во время сна"
        },
        {
          title: "Удобство и простота в использовании",
          content: "Для подбора ок-линз необходимо обратиться в нашу клинику. Наши врачи проведут обследование и подберут нужную вам линзу. Вас научат надевать и снимать линзы, а также ухаживать за ними. Для оценки результата действия ок-линзы вам необходимо наблюдаться регулярно по графику ,который назначит доктор"
        },
        {
          title: "Занятия спортом без ограничений",
          content: "Многие виды спорта не позволяют комфортно и безопасно носить очки или контактные линзы, например, водные виды или те, где есть риск возникновения несчастного случая, связанного с очками или контактными линзами. Ок-терапия — единственный метод коррекции зрения, который дает полную свободу спортсменам всех возрастов заниматься спортом без хирургического вмешательства или применения другого метода коррекции"
        },
        {
          title: "Как работают ночные линзы",
          content: "Они временно изменяют форму роговицы, исправляя её кривизну. За счёт особой конструкции линзы перераспределяют слезную жидкость: центральная часть роговицы уплощается, а периферическая — слегка искривляется. Это происходит без прямого давления на ткани, только через гидравлическое воздействие на слезную плёнку. В результате свет правильно фокусируется на сетчатке, и зрение улучшается. Эффект сохраняется 1–2 дня. Если линзы не надевать, роговица постепенно возвращается к исходной форме. Для стабильного результата их нужно использовать каждую ночь"
        }
    ];

  return (
    <>
        <div className="container">
            <Header />
            <main className="service-page">
                <section className="service-page__main">
                    <div className="service-page__main__img lenses-page__main__img" />
                    <div className="service-page__main__text">
                        <h2 className="service-page__main__heading section-heading">
                            Ночные линзы
                        </h2>
                        <p className="service-page__main__descr">
                            Ночные линзы — это безопасный и комфортный способ коррекции близорукости (–0,25 до –7,0 D) и астигматизма (до 4,0 D) без операции. Их используют только во время сна: за 6–8 часов линзы бережно изменяют кривизну роговицы, обеспечивая чёткое зрение на весь последующий день. Эффект сохраняется до 48 часов. Метод особенно подходит детям, спортсменам и тем, кому противопоказаны операции. Линзы не ощущаются во время сна и не ограничивают образ жизни.
                        </p>
                        <button className="service-page__main__btn">Записаться на приём</button>
                    </div>
                </section>
                <section className="lenses-page__about">
                    <h2 className="lenses-page__about__heading section-heading">Особенности ночных линз</h2>
                    <div className="lenses-page__about__content">
                        <ul className="lenses-page__about__list">
                        {accordionItems.map((item, index) => (
                            <li
                                key={index}
                                className={`lenses-page__about__item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <div
                                    className="lenses-page__about__item-header"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>{item.title}</span>
                                    <span className="plus-icon"/>
                                </div>
                                <div className="lenses-page__about__item-content">
                                    <div className="lenses-page__about__item-content-inner">
                                        {item.content}
                                    </div>
                                </div>
                            </li>
                        ))}
                        </ul>
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

export default LensesPage