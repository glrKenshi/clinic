import { Link } from 'react-router'

import logo from '../../imgs/logo.png'
import "./header.scss"

const Header = () => {
    return (
        <>
            <header class="header">
                <Link to="clinic/">
                    <div class="logo">
                        <img class="logo__img" src={logo} alt="" />
                        <div class="logo__text">
                            Энергия жизни
                        </div>
                    </div>
                </Link>
                <ul class="header__list">
                    <li class="header__item">
                        ул. Лермонтова, 47 А, Белгород, Белгородская обл., 308024
                    </li>
                    <li class="header__item">
                        Работаем с 7:30 до 19:00
                    </li>
                    <li class="header__item">
                        +7 (950) 716-76-76
                    </li>
                </ul>
            </header>
            <nav className="nav">
                <ul className="nav__list">
                    <Link to="clinic/">
                        <li className="nav__item">Главная</li>
                    </Link>
                    <li className="nav__item nav__item-menu">
                        Услуги
                        <ul className="nav__drop-list">
                            <li className="nav__drop-item">
                                <Link to="/diagnostic">
                                    Комплексная диагностика
                                </Link>
                            </li>
                            <li className="nav__drop-item">
                                <Link to="/device">
                                    Аппаратное лечение
                                </Link>
                            </li>
                            <li className="nav__drop-item">
                                <Link to="/lenses">
                                    Ортокератология
                                </Link>
                            </li>
                            <li className="nav__drop-item">
                                <Link to="/therapy">
                                    Физеотерапия
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <Link to="/price">
                        <li className="nav__item">Цены</li>
                    </Link>
                    <Link to="/doctors">
                        <li className="nav__item">Специалисты</li>
                    </Link>
                    <li className="nav__item">Контакты</li>
                </ul>
            </nav>
        </>
    )
}

export default Header