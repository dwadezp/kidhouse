import { Component } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'kid-header',
  template: `
    <header>
      <div class="container-fluid"> 
        <div class="row">
          <div class="col-sm-3">
            <img src="img/logo.jpg" class="logoTop" alt="logo"/>
          </div>
          <div class="col-sm-9">
            <div class="phone">+38093-000-00-00 +38093-000-00-00 | Увійти </div>
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#topNav">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span> 
                </button>
              </div>
              <div class="collapse navbar-collapse divTopMenu" id="topNav">
                <ul class="ulTopMenu">
                  <li>
                    <a href="#">Головна</a>
                  </li>
                  <li>
                    <a href="#">Фото</a>
                  </li> 
                  <li>
                    <a href="#">Як допомогти?</a>
                  </li>
                  <li>
                    <a href="#">Список необхідного</a>
                  </li> 
                  <li>
                    <a href="#">Про нас</a>
                  </li>
                  <li>
                    <a href="#">Контакти</a>
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
})
export class KidHeaderComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
