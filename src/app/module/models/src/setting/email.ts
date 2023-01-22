export class Email {
  to: string = '';
  subject: string = '';
  from: string = '';
  body: string = '';
  intervalDays: number = 0;
  lastSentDate: Date = new Date();
}
