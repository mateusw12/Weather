import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import { CircularGaugeComponent } from './circular-gauge.component';
import { CircularRangeComponent } from './circular-range/circular-range.component';

@NgModule({
  imports: [CommonModule, CircularGaugeModule],
  declarations: [CircularGaugeComponent, CircularRangeComponent],
  exports: [CircularGaugeComponent],
})
export class ChartCircularGaugeModule {}
