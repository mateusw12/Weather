import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, Sms } from '@module/models';
import { Observable } from 'rxjs';

const API_URL = 'api/email';

@Injectable({ providedIn: 'root' })
export class EmailRepository {
  constructor(private httpCliente: HttpClient) {}

  sendEmail(email: Email): Observable<Sms> {
    return this.httpCliente.post<Sms>(API_URL, email);
  }
}
