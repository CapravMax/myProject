import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'
import footer_logo from '../../assets/img/full_logo_rus_slogan__for_videovtule_full.png';
import {TbArrowNarrowRight,TbMapPin, TbMail, TbPhoneCall, TbCopyright} from 'react-icons/tb';
import {SlSocialVkontakte, SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram} from "react-icons/sl";
function Footer () {
  

    return (
// eslint-disable-next-line no-undef
<footer className='footer'>
        <div className = "footer_top">
             
                <div className="footer_top_wrap">
                  <div className="footer_top_wrap_widget">
                    <Link to ="/" className="footer_top_wrap_widget_logo">
                      <img src={footer_logo} alt = 'logo'/>
                      </Link> 
                    <p className="footer_top_wrap_widget_about">
                      Lorem ipsum dolor elit amet, consetur quo elit, sed eiusmo
                      tempor corporis itaque incidunt ut labore et dolore magna
                      aliqua ipsum nostrum Lorem ipsum dolor sit suspend.
                    </p>
                    <ul className="footer_top_wrap_widget_social_profile">
                      <li>
                        <a href ="https://vk.ru" target="_blank" rel='noreferrer'> 
                          <SlSocialVkontakte/>
                        </a>
                      </li>
                      <li>
                        <a href ="https://twitter.com" target="_blank" rel='noreferrer'>
                          <SlSocialTwitter/>
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com" target="_blank" rel='noreferrer'>
                          <SlSocialLinkedin/>
                        </a>
                      </li>
                     <li>
                        <a href ="https://instagram.com" target="_blank" rel='noreferrer'>
                          <SlSocialInstagram/>
                        </a>
                      </li> 
                    </ul>
                  </div>
                  <div className="footer_top_wrap_widget">
                    <h4 className="footer_top_wrap_widget_title">Полезное</h4>
                    <ul className="footer_top_wrap_widget_menu">
                      <li>
                        <Link to ="About">
                        <TbArrowNarrowRight/> О нас
                          </Link>
                      </li>
                      <li>
                        <Link to ="Contacts">
                        <TbArrowNarrowRight/> Контакты
                          </Link>
                      </li>
                      <li>
                        <Link to ="Help">
                        <TbArrowNarrowRight/> Помощь
                        </Link>
                     </li>
                      <li>
                        <Link to ="Privicy">
                        <TbArrowNarrowRight/> Конфеденциальность
                        </Link>
                      </li>
                      <li>
                        <Link to ="terms-conditions.html">
                        <TbArrowNarrowRight/> Правила и условия
                          </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_top_wrap_widget">
                    <h4 className="footer_top_wrap_widget_title">Наши услуги</h4>
                    <ul className="footer_top_wrap_widget_menu">
                      <li>
                        <Link to="Service" target="_blank">
                        <TbArrowNarrowRight/> Аналоговое видеонаблюдение
                          </Link>
                      </li>
                      <li>
                        <Link to ="Service" target="_blank">
                        <TbArrowNarrowRight/> Система контроля и управление доступом
                          </Link>
                      </li>
                      <li>
                        <Link to ="Service" target="_blank">
                        <TbArrowNarrowRight/> IP видеонаблюдение</Link>
                      </li>
                      <li>
                        <Link to ="Sevice" target="_blank">
                        <TbArrowNarrowRight/> Безопасный дом
                          </Link>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="footer_top_wrap_widget">
                    <h4 className="footer_top_wrap_widget_title">Наши контакты</h4>
                    <div className="footer_top_wrap_widget_contact">
                      <TbMapPin className='footer_top_wrap_widget_contact_holdplace'/>
                      <p>300279 г. Тула, ул. Кирова, д.135</p>
                    </div>
                    <div className="footer_top_wrap_widget_contact">
                      
                      <Link to ="/cdn-cgi/l/email-protection#e28a878e8e8da289848e8d95cc818d8f">
                        <TbMail className="footer_top_wrap_widget_contact_email"
                          data-cfemail="177f727b7b78577c717b78603974787a" />
                          <span> Написать нам</span> 
                          </Link>
                    </div>
                    <div className ="footer_top_wrap_widget_contact">
                     
                      <Link to ="tel:+78003335101" >
                       <TbPhoneCall className="footer_top_wrap_widget_contact_phone"/>
                      <span> +7 (800) 333-51-01</span>
                      </Link>
                    </div>
                  </div>
                </div>
             
            
          
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_copyright">
            <p>
            <TbCopyright/>
            <span className="copyright"> 2006 - {(new Date().getFullYear())} Тульский Дом Безопасности</span> 
               
              
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer