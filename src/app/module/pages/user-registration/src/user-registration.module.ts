import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonAppModule,
  PasswordStrengthBarModule,
  TextBoxModule,
} from '@module/shared';
import { ReactiveFormsModule } from '@module/utils/forms';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';

@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    CommonModule,
    TextBoxModule,
    ReactiveFormsModule,
    ButtonModule,
    ButtonAppModule,
    PasswordStrengthBarModule,
    UserRegistrationRoutingModule,
  ],
})
export class UserRegistrationModule {}
