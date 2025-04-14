import { useState } from "react";
import Header from '../../header/Header'
import Footer from '../../footer/Footer'

import './pricePage.scss'

const PricePage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const toggleItem = (index) => {
      if (isAnimating) return;
      
      if (activeIndex === index) {
        setIsAnimating(true);
        setActiveIndex(null);
        setTimeout(() => setIsAnimating(false), 500); 
      } else {
        if (activeIndex !== null) {
          setIsAnimating(true);
          setActiveIndex(null);
          setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
          }, 500);
        } else {
          setActiveIndex(index);
        }
      }
    };

    const items = [
      {
        title: "Детская офтальмология",
        content: [
          { info: "Амблиокор 01 (лечение) 10 минут", price: "450р" },
          { info: "Аппаратное лечение по комплексу «Зайчик»", price: "6000р" },
          { info: "Аппаратное лечение по комплексу «Листик»", price: "5500р" },
          { info: "Аппаратное лечение по комплексу «Пташка»", price: "8500р" },
          { info: "Аппаратное лечение по комплексу «Солнышко»", price: "7000р" },
          { info: "Аппаратное лечение по комплексу «Цветик»", price: "5500р" },
          { info: "Комплексная диагностика детского врача-офтальмолога (Жерновая Л.М.)", price: "2500р" },
          { info: "Комплексная диагностика детского врача-офтальмолога (Скорикова Т.Н.)", price: "1800р" },
          { info: "Осмотр по завершению аппаратного лечения", price: "500р" },
        ],
      },
      {
        title: "Ортокератология ОКЛ",
        content: [
          { info: "Абонемент (посещение 500р)", price: "1500р" },
          { info: "Внеплановая ультразвуковая или лабораторная очистка линз", price: "300р" },
          { info: "Выдача ОКЛ", price: "0р" },
          { info: "Первичный подбор ортокератологических линз (съемник+обучение)", price: "3000р" },
          { info: "Повторный подбор ортокератологических линз", price: "0р" },
          { info: "Разовое плановое наблюдение", price: "0р" },
          { info: "Разовое плановое наблюдение (всего 5 визитов в год)", price: "500р" },
        ],
      },
      {
        title: "Жесткие контактные линзы",
        content: [
          { info: "Ортокератологическое лечение линзами MoonLens (1 линза)", price: "10 000р" },
          { info: "Ортокератологическое лечение линзами MoonLens (2 линзы)", price: "20 000р" },
          { info: "Ортокератологическое лечение линзами MoonLens ES (1шт)", price: "11 000р" },
          { info: "Ортокератологическое лечение линзами MoonLens ES (2шт)", price: "22 000р" },
          { info: "Ортокератологическое лечение линзами Доктор Линз (1 глаз)", price: "8 500р" },
          { info: "Ортокератологическое лечение линзами Доктор Линз (2 глаза)", price: "17 000р" },
          { info: "Ортокератологическое лечение линзами Доктор Линз (1 глаз) торичная", price: "9 000р" },
          { info: "Ортокератологическое лечение линзами MoonLens (2 глаза) торичная", price: "18 000р" },
        ],
      },
      {
        title: "Офтальмология",
        content: [
          { info: "Осмотр по завершению аппаратного лечения (Цепляева В.Д)", price: "600р" },
          { info: "Первичный прием взрослого врача-офтальмолога (Вялых Е.А)", price: "1800р" },
          { info: "Прием врача-офтальмолога (Цепляева В.Д.)", price: "1800р" },
          { info: "Узи глаза (1 глаз)", price: "500р" },
          { info: "Подбор очков", price: "0р" },
        ],
      },
      {
        title: "Физиотерапия",
        content: [
          { info: "SIS терапия", price: "800р" },
          { info: "Кинезотерапия", price: "850р" },
          { info: "Лазерная терапия 1 поле 1 процедура", price: "600р" },
          { info: "Магнитотерапия BTL 1 поле 1 процедура", price: "600р" },
          { info: "Сухое скелетное вытяжение поясничный, грудной отдел", price: "850р" },
          { info: "Сухое скелетное вытяжение шейного отдела", price: "850р" },
          { info: "Ударно-волновая терапия (фокусная) 2000уд", price: "1400р" },
          { info: "Ударно-волновая терапия BTL 6000", price: "1000р" },
          { info: "Ультразвуковая терапия без препарата", price: "500р" },
          { info: "Электростимуляция мышц", price: "500р" },
          { info: "Электрофорез с лекарственным средством", price: "600р" },
          { info: "Электрофорез с лекарственным средством пациента", price: "300р" },
        ],
      },
    ];

    return (
        <main className='price'>
            <div className="container price__container">
                <Header />

                <div style={{'text-align': 'center'}}>
                  <h2 className="section-heading price__heading">Наши услуги</h2>
                </div>

                <div className="price__accordion">
                    {items.map((item, index) => (
                        <div key={index} className="price__accordion-item">
                            <div className="price__accordion-header" onClick={() => toggleItem(index)}>
                                {item.title}
                            </div>
                            <div className={`price__accordion-content ${activeIndex === index ? "open" : ""}`}>
                                <ul className="price__list">
                                    {item.content.map((line, i) => (
                                        <li className="price__item" key={i}>
                                          <span>{line.info}</span>
                                          <span className="price__item-price">{line.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
          <Footer />  
        </main>
    )
}

export default PricePage