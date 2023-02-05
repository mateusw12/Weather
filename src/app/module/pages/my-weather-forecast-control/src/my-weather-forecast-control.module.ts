import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonAppModule,
  ChartCircularGaugeModule,
  DatePickerModule,
  FormGridModule,
  ModalModule,
  TextBoxModule,
} from '@module/shared';
import { ReactiveFormsModule } from '@module/utils/forms';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import { DetailModalControlComponent } from './detail-modal/detail-modal.component';
import { MyWeatherForecastControlRoutingModule } from './my-weather-forecast-control-routing.module';
import { MyWeatherForecastControlComponent } from './my-weather-forecast-control.component';

@NgModule({
  declarations: [
    MyWeatherForecastControlComponent,
    DetailModalControlComponent,
  ],
  imports: [
    CommonModule,
    MyWeatherForecastControlRoutingModule,
    ButtonModule,
    ButtonAppModule,
    FormGridModule,
    ReactiveFormsModule,
    DatePickerModule,
    ModalModule,
    TextBoxModule,
    CircularGaugeModule,
    ChartCircularGaugeModule,
  ],
})
export class MyWeatherForecastControlModule {}
