import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpMeComponent } from './help-me.component';

const routes: Routes = [{ path: '', component: HelpMeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpMeRoutingModule {}
