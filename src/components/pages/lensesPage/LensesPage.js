import { useState } from 'react';
import Header from '../../header/Header'
import Footer from '../../footer/Footer';

import plusIcon from '../../../imgs/plus-large-svgrepo-com.svg'
import moonlens from '../../../imgs/lensesPage/exp1.jpg'
import doctorlens from '../../../imgs/lensesPage/exp2.jpg'

import './lensesPage.scss'

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
            <main className="lenses-page">
                <section className="lenses-page__main">
                    <div className="lenses-page__main__img lenses-page__main__img" />
                    <div className="lenses-page__main__text">
                        <h2 className="lenses-page__main__heading section-heading">
                            Ортокератология
                        </h2>
                        <p className="lenses-page__main__descr">
                            Ортокератология (ОК-терапия) — это современный метод временной коррекции аномалий рефракции: близорукости и астигматизма, при помощи планового применения жестких газопроницаемых контактных линз (орто-линзы, ночные линзы, ОК-линзы), которые используются во время сна и, посредством запрограммированной перестройки эпителия роговицы, улучшают остроту зрения.
                        </p>
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
                                    <img src={plusIcon} className="plus-icon"/>
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
                <section className="lenses-page__expl">
                    <h2 className="lenses-page__expl__heading section-heading">Линзы с которыми мы работаем</h2>
                    <div className="lenses-page__expl__wrapper">
                        <div className="lenses-page__expl__item">
                          <img src={moonlens} alt="moonlens" className='lenses-page__expl__img'/>
                          <h3 className="lenses-page__expl__name">MOONLENS</h3>
                          <p className="lenses-page__expl__text">
                          Ночные линзы MOONLENS — это:<br/>
                          • Прекрасное зрение без очков и контактных линз в течение дня. <br/>
                          • Эффективный способ остановить развитие близорукости y 60 - 90% пациентов! <br/>
                          • Возможность вести активный образ жизни и без ограничений заниматься спортом. <br/>
                          • Предотвращение комплексов, связанных c ношением очков, что особенно важно для детей и подростков. <br/>
                          • Повышенный комфорт, поскольку линзы не ощущаются во время сна.<br/>
                          • Безопасность, доказанная многочисленными исследованиями.<br/>
                          • Спокойствие родителей, поскольку все процедуры ребенок выполняет дома под присмотром мамы. <br/>
                          • Длительный срок службы - 12 месяцев, по истечении которого требуется замена на новую пару линз.<br/>
                          Ночные линзы MoonLens - всегда высокое качество!
                          </p>
                        </div>
                        <div className="lenses-page__expl__item">
                          <img src={doctorlens} alt="moonlens" 
                          className='lenses-page__expl__img'/>
                          <h3 className="lenses-page__expl__name">Доктор Линз </h3>
                          <p className="lenses-page__expl__text">
                            При разработке линз ESA профессор Антонио Калосси исследовал более 1000 топографических снимков роговиц. Анализ данных о строении реальных роговиц позволил учесть многообразие их форм в популяции.
                            Созданная 6-зонная конструкция линзы обеспечивает: безопасное воздействие, простой и точный подбор, высокую остроту зрения, быстрое развитие эффекта и стабильный результат, торможение прогрессирования миопии, комфорт при длительном ношении.
                            В России линзы конструкции ESA выпускает «Доктор Линз Техно» — единственное в России производство жестких газопроницаемых контактных линз, сертифицированное по ISO 13485:2016
                            ISO 13485 «Изделия медицинские. Системы менеджмента качества. Требования для целей регулирования» — является международно согласованным стандартом, который устанавливает требования к системе управления качеством, характерным для индустрии медицинских изделий.
                          </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <Footer />
    </>
  )
}

export default LensesPage