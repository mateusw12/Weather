import { Directive, Injector } from '@angular/core';
import { ButtonBase } from './button.directive';

@Directive({ selector: '[buttonCreateUser]' })
export class ButtonCreateUserDirective extends ButtonBase {
  constructor(injector: Injector) {
    super(injector);
    this.cssClass = 'e-info';
    this.iconCss = 'e-icons e-plus-small';
    this.content = 'Cadastre-se';
  }
}
