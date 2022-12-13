import { Directive, Injector } from '@angular/core';
import { ButtonBase } from './button.directive';

@Directive({ selector: '[buttonReturn]' })
export class ButtonReturnDirective extends ButtonBase {
  constructor(injector: Injector) {
    super(injector);
    this.cssClass = 'e-info';
    this.iconCss = 'fa fa-arrow-left';
    this.content = 'Voltar';
  }
}
