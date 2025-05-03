import { Link } from 'react-router'

import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__info">
              <p className='footer__text'>
                Материалы, размещенные на&nbsp;данной странице, носят информационный характер и&nbsp;предназначены для ознакомительных целей. Необходимо проконсультироваться с&nbsp;врачом.
                Информация, представленная на&nbsp;сайте, не&nbsp;может быть использована для постановки диагноза, назначения лечения и&nbsp;не&nbsp;заменяет прием врача.
                Информация, размещенная на&nbsp;сайте, не&nbsp;является публичной офертой. Актуальную информацию о&nbsp;ценах, акциях и&nbsp;предложениях уточняйте по&nbsp;телефону
              </p>
              <span className='footer__text'>© 2025 Клиника Детской Офтальмологии, Белгород</span>
            </div>

            <div className="footer__nav">
              <Link to='/'>Главная</Link>
              <Link to='/'>Комплексная диагностика</Link>
              <Link to='/'>Аппаратное лечение</Link>
              <Link to='/'>Ортокератология</Link>
              <Link to='/'>Физеотерапия</Link>
              <Link to='/'>Цены</Link>
              <Link to='/'>Специалисты</Link>
              <Link to='/'>Контакты</Link>
            </div>

            <div className="footer__contact">
              <h3 className="footer__contact-heading">Контакты</h3>
              <span>Работаем с 7:30 до 19:00</span>
              <span>+7 (950) 716-76-76</span>
              <span>ул. Лермонтова, 47 А, г. Белгород</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer