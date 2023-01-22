export class Notification {
  sendEmail: boolean = false;
  sendSms: boolean = false;
  email: string = '';
  phone: string = '';
  breakingDay: number = 0;
  id: number = 0;
  userName: string = '';
  lastSentDate:Date = new Date();
}
