import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyWeatherForecastControlComponent } from './my-weather-forecast-control.component';

const routes: Routes = [{ path: '', component: MyWeatherForecastControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWeatherForecastControlRoutingModule {}
