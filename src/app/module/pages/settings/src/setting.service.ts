import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {
  private notification = new Subject<void>();
  private myAccount = new Subject<void>();

  notificationLoad(): void {
    this.notification.next();
  }

  myAccountLoad(): void {
    this.myAccount.next();
  }

  onNotificationLoad(): Observable<void> {
    return this.notification.asObservable();
  }

  onMyAccountLoad(): Observable<void> {
    return this.myAccount.asObservable();
  }
}
