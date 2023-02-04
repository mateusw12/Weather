import { Directive, Injector } from '@angular/core';
import { ButtonBase } from './button.directive';

@Directive({ selector: '[buttonForecast5Day]' })
export class ButtonForecast5DayDirective extends ButtonBase {
  constructor(injector: Injector) {
    super(injector);
    this.cssClass = 'e-warning';
    this.iconCss = 'bi bi-brightness-high-fill';
    this.content = 'Previsão 5 Dias';
  }
}
