import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAppModule } from '@module/shared';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { HelpMeRoutingModule } from './help-me-routing.module';
import { HelpMeComponent } from './help-me.component';

@NgModule({
  declarations: [HelpMeComponent],
  imports: [CommonModule, HelpMeRoutingModule, ButtonModule, ButtonAppModule],
})
export class HelpMeModule {}
