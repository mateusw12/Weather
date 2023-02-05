import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAppModule, FormGridModule } from '@module/shared';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { MyWeatherForecastControlRoutingModule } from './my-weather-forecast-control-routing.module';
import { MyWeatherForecastControlComponent } from './my-weather-forecast-control.component';

@NgModule({
  declarations: [MyWeatherForecastControlComponent],
  imports: [
    CommonModule,
    MyWeatherForecastControlRoutingModule,
    ButtonModule,
    ButtonAppModule,
    FormGridModule,
  ],
})
export class MyWeatherForecastControlModule {}
