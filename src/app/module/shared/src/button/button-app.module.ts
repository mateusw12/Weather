import { NgModule } from '@angular/core';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { ButtonAddDirective } from './button-add.directive';
import { ButtonApplyDirective } from './button-apply.directive';
import { ButtonCancelDirective } from './button-cancel.directive';
import { ButtonConfigDirective } from './button-config.directive';
import { ButtonConfirmDirective } from './button-confirm.directive';
import { ButtonCreateUserDirective } from './button-create-user.directive';
import { ButtonDeleteDirective } from './button-delete.directive';
import { ButtonFinishDirective } from './button-finish.directive';
import { ButtonForecast5DayDirective } from './button-forecast-day-5-day.directive';
import { ButtonHistoricDirective } from './button-historic.directive';
import { ButtonLoginDirective } from './button-login.directive';
import { ButtonOkDirective } from './button-ok.directive';
import { ButtonResetDirective } from './button-reset.directive';
import { ButtonReturnDirective } from './button-return.directive';
import { ButtonSaveDirective } from './button-save.directive';
import { ButtonSearchDirective } from './button-search.directive';
import { ButtonUploadDirective } from './button-upload.directive';
import { ButtonDirective } from './button.directive';
import { ThrottleClickDirective } from './throttle-click.directive';

@NgModule({
  imports: [ButtonAllModule],
  declarations: [
    ButtonAddDirective,
    ButtonCancelDirective,
    ButtonConfigDirective,
    ButtonDeleteDirective,
    ButtonResetDirective,
    ButtonSaveDirective,
    ButtonSearchDirective,
    ButtonDirective,
    ButtonOkDirective,
    ButtonApplyDirective,
    ThrottleClickDirective,
    ButtonUploadDirective,
    ButtonLoginDirective,
    ButtonFinishDirective,
    ButtonCreateUserDirective,
    ButtonReturnDirective,
    ButtonHistoricDirective,
    ButtonForecast5DayDirective,
    ButtonConfirmDirective,
  ],
  exports: [
    ButtonAddDirective,
    ButtonCancelDirective,
    ButtonConfigDirective,
    ButtonDeleteDirective,
    ButtonResetDirective,
    ButtonSaveDirective,
    ButtonSearchDirective,
    ButtonDirective,
    ButtonOkDirective,
    ButtonApplyDirective,
    ThrottleClickDirective,
    ButtonUploadDirective,
    ButtonLoginDirective,
    ButtonFinishDirective,
    ButtonCreateUserDirective,
    ButtonReturnDirective,
    ButtonHistoricDirective,
    ButtonForecast5DayDirective,
    ButtonConfirmDirective,
  ],
})
export class ButtonAppModule {}
