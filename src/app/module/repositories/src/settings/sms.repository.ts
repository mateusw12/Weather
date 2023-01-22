import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sms } from '@module/models';
import { Observable } from 'rxjs';

const API_URL = 'api/sms';

@Injectable({ providedIn: 'root' })
export class SmsRepository {
  constructor(private httpCliente: HttpClient) {}

  sendEmail(sms: Sms): Observable<Sms> {
    return this.httpCliente.post<Sms>(API_URL, sms);
  }
}
