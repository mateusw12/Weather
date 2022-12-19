import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {

  private notification = new Subject<void>();

  notificationLoad(): void {
    this.notification.next();
  }

  onNotificationLoad(): Observable<void> {
    return this.notification.asObservable();
  }
  
}
