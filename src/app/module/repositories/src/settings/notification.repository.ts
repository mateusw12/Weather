import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notification } from '@module/models';
import { Observable } from 'rxjs';

const API_URL = 'api/configuracao/notificacao';

@Injectable({ providedIn: 'root' })
export class NotificationRepository {
  constructor(private httpCliente: HttpClient) {}

  add(user: Notification): Observable<void> {
    return this.httpCliente.post<void>(API_URL, user);
  }

  find(): Observable<Notification> {
    return this.httpCliente.get<Notification>(API_URL);
  }

  updateById(user: Notification): Observable<void> {
    return this.httpCliente.put<void>(`${API_URL}/${user.id}`, user);
  }

  deleteById(id: number): Observable<void> {
    return this.httpCliente.delete<void>(`${API_URL}/${id}`);
  }
  
}
