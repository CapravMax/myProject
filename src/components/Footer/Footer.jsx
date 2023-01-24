import React from 'react';
import './Footer.scss'

function Footer () {
  

    return (
// eslint-disable-next-line no-undef
<footer className={'footer-bg'}>
        <div className = {"footer-top pb-70"}>
          <div className ="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-widget-wrap">
                  <div className="footer-widget">
                    {/* <a href="index.html" class="footer-logo"
                      ><img src="" alt="Image"
                    /></a> */}
                    <p className="comp-desc">
                      Lorem ipsum dolor elit amet, consetur quo elit, sed eiusmo
                      tempor corporis itaque incidunt ut labore et dolore magna
                      aliqua ipsum nostrum Lorem ipsum dolor sit suspend.
                    </p>
                    <ul className="social-profile style2 list-style">
                      {/* <li>
                        <a target="_blank" href="https://vk.ru"
                          ><i class="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://twitter.com">
                          <i class="flaticon-twitter"></i>
                        </a>
                      </li> */}
                      {/* <li>
                        <a target="_blank" href="https://linkedin.com">
                          <i class="flaticon-linkedin-1"></i>
                        </a>
                      </li> */}
                      {/* <li>
                        <a target="_blank" href="https://instagram.com">
                          <i class="flaticon-instagram"></i>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">Useful Link</h4>
                    <ul className="footer-menu list-style">
                      <li>
                        <a href="about.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>About Us</a>
                      </li>
                      <li>
                        <a href="contact.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>Contact Us</a>
                      </li>
                      <li>
                        <a href="contact.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>Help Desk</a>
                                          </li>
                      <li>
                        <a href="privacy-policy.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>Privacy
                          Policy</a>
                      </li>
                      <li>
                        <a href="terms-conditions.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>Terms &amp;
                          Conditions</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">Our Services</h4>
                    <ul className="footer-menu list-style">
                      <li>
                        <a href="service-details.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>CCTV
                          Installation</a>
                      </li>
                      <li>
                        <a href="service-details.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>Finger Print
                          Access</a>
                      </li>
                      <li>
                        <a href="service-details.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>HD IP
                          Cameras</a>
                      </li>
                      <li>
                        <a href="service-details.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>Home
                          Security</a>
                      </li>
                      <li>
                        <a href="service-details.html" target="_blank"
                          ><i className="flaticon-right-arrow-1"></i>Door Lock</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">Contact us</h4>
                    <div className="contact-item">
                      <i className="flaticon-placeholder"></i>
                      <p>Melborne Main St, VIC 3000, Melborne, Australia</p>
                    </div>
                    <div className="contact-item">
                      <i className="flaticon-message-1"></i>
                      <a
                        href="/cdn-cgi/l/email-protection#e28a878e8e8da289848e8d95cc818d8f"
                        ><span
                          className="__cf_email__"
                          data-cfemail="177f727b7b78577c717b78603974787a"
                          >[email&#160;protected]</span>
                          </a>
                    </div>
                    <div className ="contact-item">
                      <i className="flaticon-phone-call"></i>
                      <a href="tel:920023456789">+9200 (2) 345 6789</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              <span className="las la-copyright"></span>
              
             
                document.write(new Date().getFullYear());
              
              
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer