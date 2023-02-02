import React from "react";
import { Link } from "react-router-dom";
import { TbMail, TbPhoneCall, TbUserCircle } from "react-icons/tb";
import { Search } from "../Search/Search";
import "./Header.scss";
import lightLogo from "../../assets/img/full_logo_rus_slogan__for_videovtule_full.png";

function Header() {
  return (
    <header className='header'>
      <div className='header_top'>
        <div className='header_top_left'>
          <Link to='tel:+78002555511' className='header_top_left_contact'>
            <TbPhoneCall className='header_top_left_contact_phone' />
            <span> Позвонить: +7 (800) 255-5511</span>
          </Link>

          <Link
            to='citadel-trade@yandex.ru'
            className='header_top_left_contact'>
            <TbMail className='header_top_left_contact_email' />
            <span> Написать:citadel-trade@yandex.ru</span>
          </Link>
        </div>

        <div className='header_top_right'>
          <Link to='my-account.html' className='header_top_left_contact'>
            <TbUserCircle className='header_top_right_account' />
            <span> Мой профиль</span>
          </Link>
        </div>
      </div>
      <div className='header_bottom'>
        <Link to='/' className='header_bottom_logo'>
          <img
            className='header_bottom_logo_light'
            src={lightLogo}
            alt='light logo'
          />
        </Link>

        <div className='header_bottom_menu'>
          <ul className='header_bottom_menu_list'>
            <li className='header_bottom_menu_list_item'>
              <Link to='Services'>Услуги</Link>
            </li>
            <li className='header_bottom_menu_list_item'>
              <Link to='Projects'>Проекты</Link>
            </li>

            <li className='header_bottom_menu_list_item'>
              <Link to='Shop'>Магазин</Link>
            </li>

            <li className='header_bottom_menu_list_item'>
              <Link to='Blog'>Блог</Link>
            </li>

            <li className='header_bottom_menu_list_item'>
              <Link to='AboutCompany'>О компании</Link>
              <ul className='header_bottom_menu_list_sub-menu'>
                <li>
                  <Link to='about.html'>О нас</Link>
                </li>
                <li>
                  <Link to='team.html'>Команда</Link>
                </li>
                <li>
                  <Link to='testimonials.html'>Рекомендации</Link>
                </li>
                <li>
                  <Link to='faq.html'>Помощь</Link>
                </li>

                <li>
                  <Link to='privacy-policy.html'>Конфедициальность</Link>
                </li>
              </ul>
            </li>

            <li className='header_bottom_menu_list_item'>
              <Link to='Contacts'>Контакты</Link>
            </li>

            <li>
              <Search />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
