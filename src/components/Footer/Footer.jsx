import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'
import footer_logo from '../../assets/img/logo_rus.png'

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
                        <Link to ="https://vk.ru" target="_blank"> 
                          <i className="flaticon-facebook-app-symbol"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to ="https://twitter.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-1"></i>
                        </Link>
                      </li>
                     <li>
                        <Link to ="https://instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </Link>
                      </li> 
                    </ul>
                  </div>
                  <div className="footer_top_wrap_widget">
                    <h4 className="footer_top_wrap_widget_title">Useful Link</h4>
                    <ul className="footer_top_wrap_widget_menu">
                      <li>
                        <Link to ="About" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>О нас
                          </Link>
                      </li>
                      <li>
                        <Link to ="Contacts" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>Контакты
                          </Link>
                      </li>
                      <li>
                        <Link to ="Help" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>Помощь
                        </Link>
                     </li>
                      <li>
                        <Link to ="Privicy" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>Конфеденциальность
                        </Link>
                      </li>
                      <li>
                        <Link to ="terms-conditions.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>Правила и условия
                          </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_top_wrap_widget">
                    <h4 className="footer_top_wrap_widget_title">Наши услуги</h4>
                    <ul className="footer_top_wrap_widget_menu">
                      <li>
                        <Link to="Service" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>Аналоговое видеонаблюдение
                          </Link>
                      </li>
                      <li>
                        <Link to ="Service" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>Система контроля и управление доступом
                          </Link>
                      </li>
                      <li>
                        <Link to ="Service" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>IP видеонаблюдение</Link>
                      </li>
                      <li>
                        <Link to ="Sevice" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>Безопасный дом
                          </Link>
                      </li>
                      <li>
                        <Link to ="Service" target="_blank">
                          <i className="flaticon-right-arrow-1"></i>Door Lock
                          </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_top_wrap_widget">
                    <h4 className="footer_top_wrap_widget_title">Contact us</h4>
                    <div className="footer_top_wrap_widget_contact">
                      <i className="flaticon-placeholder"></i>
                      <p>300279 г. Тула, ул. Кирова, д.135</p>
                    </div>
                    <div className="footer_top_wrap_widget_contact">
                      <i className="flaticon-message-1"></i>
                      <Link to ="/cdn-cgi/l/email-protection#e28a878e8e8da289848e8d95cc818d8f">
                        <span className="__cf_email__"
                          data-cfemail="177f727b7b78577c717b78603974787a"
                          >[email&#160;protected]</span>
                          </Link>
                    </div>
                    <div className ="footer_top_wrap_widget_contact">
                      <i className="flaticon-phone-call"></i>
                      <a href="tel:+78003335101">+7 (800) 333-51-01</a>
                    </div>
                  </div>
                </div>
             
            
          
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_copyright">
            <p>
              {/* <span className="las la-copyright">{document.write(new Date().getFullYear())}</span> */}
               
              
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer