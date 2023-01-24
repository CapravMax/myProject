import './Preloader.scss';

export function Preloader ($) {
    
    $ (window).on("load", function () {
        $(".js-preloader").delay(500).fadeOut(500);
      });
    return (
        <div className="preloader js-preloader">
      <img src="assets/img/preloader.gif" alt="preloder"/>
    </div>
    )
}
