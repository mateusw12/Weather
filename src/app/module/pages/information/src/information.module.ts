import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAppModule } from '@module/shared';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    ButtonModule,
    ButtonAppModule,
  ],
})
export class InformationModule {}
