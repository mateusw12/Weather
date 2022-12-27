import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAppModule, TextBoxModule } from '@module/shared';
import { ReactiveFormsModule } from '@module/utils/forms';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { WeatherForecastRegistrationRoutingModule } from './weather-forecast-registration-routing.module';
import { WeatherForecastRegistrationComponent } from './weather-forecast-registration.component';

@NgModule({
  declarations: [WeatherForecastRegistrationComponent],
  imports: [
    CommonModule,
    WeatherForecastRegistrationRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    TextBoxModule,
    ButtonAppModule,
  ],
})
export class WeatherForecastRegistrationModule {}
