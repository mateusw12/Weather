import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAppModule } from '@module/shared';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, ButtonModule, ButtonAppModule],
})
export class NewsModule {}
