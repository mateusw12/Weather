import { Directive, Injector } from '@angular/core';
import { ButtonBase } from './button.directive';

@Directive({ selector: '[buttonHistoric]' })
export class ButtonHistoricDirective extends ButtonBase {
  constructor(injector: Injector) {
    super(injector);
    this.cssClass = 'e-warning';
    this.iconCss = 'bi bi-list-ul';
    this.content = 'Histórico';
  }
}
