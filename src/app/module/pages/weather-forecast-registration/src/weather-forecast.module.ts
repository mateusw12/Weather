import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAppModule, ModalModule, TextBoxModule } from '@module/shared';
import { ReactiveFormsModule } from '@module/utils/forms';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { WeatherForecast5DayComponent } from './weather-forecast-5-day-modal/weather-forecast-5-day-modal.component';
import { WeatherForecastRegistrationRoutingModule } from './weather-forecast-registration-routing.module';
import { WeatherForecastRegistrationComponent } from './weather-forecast-registration.component';

@NgModule({
  declarations: [
    WeatherForecastRegistrationComponent,
    WeatherForecast5DayComponent,
  ],
  imports: [
    CommonModule,
    WeatherForecastRegistrationRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    TextBoxModule,
    ButtonAppModule,
    ModalModule,
    TabAllModule,
  ],
})
export class WeatherForecastRegistrationModule {}
