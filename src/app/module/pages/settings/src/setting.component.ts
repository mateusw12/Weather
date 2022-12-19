import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { SettingService } from './setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  readonly tabHeaders = {
    myAccount: { heading: 'Minha Conta', index: 0 },
    notification: { heading: 'Notificações', index: 1 },
  };

  constructor(private router: Router, private settingService: SettingService) {}

  ngOnInit(): void {}

  activatedTab(event: SelectEventArgs): void {
    this.selectedTab(event.selectedIndex);
  }

  private selectedTab(selectedIndex: number): void {
    
    switch (selectedIndex) {
      case this.tabHeaders.myAccount.index:
        break;
      case this.tabHeaders.notification.index:
        this.settingService.notificationLoad();
        break;
      default:
        break;
    }
  }

  onReturnClick(): void {
    this.router.navigate([`/menu`]);
  }
}
