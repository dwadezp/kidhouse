import { Component } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'kid-footer',
  template: `
    <footer>
      <div class="menuLine">
        <nav class="navbar">
          <ul class="navBottom">
            <li>
              <a href="#" class="select">Головна</a>
            </li>
            <li>
              <a href="#" class="select">Фото</a>
            </li>
            <li>
              <a href="#" class="select">Як допомогти?</a>
            </li>
            <li>
              <a href="#" class="select">Список необхідного</a>
            </li>
            <li>
              <a href="#" class="select">Про нас</a>
            </li>
            <li>
              <a href="#" class="select">Контакти</a>
            </li>
          </ul>
        </nav>  
      </div>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <h3>Новини та події</h3>
            <div class="col-sm-4 news">
              <article>
                <span>20 травня 2015</span>
              </article>
              <article> Дитячий будинок свіжі новини з фото та відео матеріалами</article>
              <article class="newsLinkUnderL">Читати далі</article>
            </div>
            <div class="col-sm-4 news">
              <article>
                <span>20 травня 2015</span>
              </article>
              <article> Дитячий будинок свіжі новини з фото та відео матеріалами</article>
              <article class="newsLinkUnderL">Читати далі</article>
            </div>
            <div class="col-sm-4 news">
              <article>
                <span>20 травня 2015</span>
              </article>
              <article> Дитячий будинок свіжі новини з фото та відео матеріалами</article>
              <article class="newsLinkUnderL">Читати далі</article>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-2">
            <img src="img/logoFooter.png" class="imgFooter img-responsive">
          </div>
          <div class="col-sm-6"></div>
          <div class="col-sm-4">
            <h5>Старосамбірський р-н с. Буково, Львівська область</h5>
            <a href="#">
              <img src="img/tw.png" class="socialIcon">
            </a>
            <a href="#">
              <img src="img/you.png" class="socialIcon">
            </a>
            <a href="#">
              <img src="img/f.png" class="socialIcon">
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class KidFooterComponent {
  constructor() {

  }

  ngOnInit() {
    
  }

}
