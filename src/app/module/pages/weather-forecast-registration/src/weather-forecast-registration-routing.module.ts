import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastRegistrationComponent } from './weather-forecast-registration.component';

const routes: Routes = [{ path: '', component: WeatherForecastRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherForecastRegistrationRoutingModule {}
