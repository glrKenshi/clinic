import Header from '../../header/Header'
import Footer from "../../footer/Footer"
import optic from "../../../imgs/optics123.jpeg"

import './clinicPage.scss'

const ClinicPage = () => {
  return (
    <>
      <main className="clinic">
        <div className="container">
            <Header />
            <h2 className="section-heading clinic__page-heading">О клинике</h2>
      
            <div className="clinic__info">
              <div className="clinic__info-block">
                <h3 className="clinic__info-heading">Клиника «Энергия жизни»</h3>
                <p className="clinic__info-description">Это частный медицинский центр для всей семьи с 2 филиалами в городе Белгород. Основан в 2014 году и за 9 лет из кабинета гинеколога превратился в клинику с двумя филиалами, командой единомышленников и современным оборудованием</p>
              </div>
              <div className="clinic__info-block">
                <h3 className="clinic__info-heading">Главная наша ценность</h3>
                <p className="clinic__info-description">Команда состоящая из врачей , имеющих большой опыт работы, многие из них имеют ученые степени, сертификаты зарубежных клиник. У нас передовое оснащение и лучшее медицинское оборудование известных мировых производителей</p>
              </div>
            </div>

            <h2 className="section-heading clinic__heading">Наши направления</h2>
            <ul className="clinic__list">
              <li className="clinic__item">
                <div className="clinic__item-text">
                  <h3 className="clinic__item-heading">
                    Физиотерапия и реабилитация
                  </h3>
                  <p className="clinic__item-description">
                    Физиотерапия – это один из самых щадящих подходов к лечению организма. В данном случае применяются естественные и неболезненные воздействия на тело человека: массажем, магнитным полем, лазерным излучением, ударно-волновым методом и некоторыми другими способами. Физиотерапевтические процедуры - превосходный способ профилактики заболеваний и реабилитации, так как помогают активизировать естественные процессы в организме, который сам начинает бороться с проблемами
                  </p>
                </div>
                <img src={optic} alt="" className="clinic__item-img" />
              </li>

              <li className="clinic__item">
                <img src={optic} alt="" className="clinic__item-img" />
                <div className="clinic__item-text">
                  <h3 className="clinic__item-heading">
                    Физиотерапия и реабилитация
                  </h3>
                  <p className="clinic__item-description">
                    Физиотерапия – это один из самых щадящих подходов к лечению организма. В данном случае применяются естественные и неболезненные воздействия на тело человека: массажем, магнитным полем, лазерным излучением, ударно-волновым методом и некоторыми другими способами. Физиотерапевтические процедуры - превосходный способ профилактики заболеваний и реабилитации, так как помогают активизировать естественные процессы в организме, который сам начинает бороться с проблемами
                  </p>
                </div>
              </li>

              <li className="clinic__item">
                <div className="clinic__item-text">
                  <h3 className="clinic__item-heading">
                    Физиотерапия и реабилитация
                  </h3>
                  <p className="clinic__item-description">
                    Физиотерапия – это один из самых щадящих подходов к лечению организма. В данном случае применяются естественные и неболезненные воздействия на тело человека: массажем, магнитным полем, лазерным излучением, ударно-волновым методом и некоторыми другими способами. Физиотерапевтические процедуры - превосходный способ профилактики заболеваний и реабилитации, так как помогают активизировать естественные процессы в организме, который сам начинает бороться с проблемами
                  </p>
                </div>
                <img src={optic} alt="" className="clinic__item-img" />
              </li>
            </ul>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ClinicPage