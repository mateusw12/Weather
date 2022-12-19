import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonAppModule,
  NumericTextBoxModule,
  TextBoxModule,
} from '@module/shared';
import { ReactiveFormsModule } from '@module/utils/forms';
import {
  ButtonModule,
  CheckBoxAllModule,
} from '@syncfusion/ej2-angular-buttons';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { SettingService } from './setting.service';

@NgModule({
  declarations: [SettingComponent, MyAccountComponent, NotificationComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    TextBoxModule,
    CheckBoxAllModule,
    NumericTextBoxModule,
    ButtonModule,
    ButtonAppModule,
    ReactiveFormsModule,
    TabModule,
  ],
  providers: [SettingService],
})
export class SettingModule {}
