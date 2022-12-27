import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'https://countryflagsapi.com/png';

@Injectable({ providedIn: 'root' })
export class CountryFlagRepository {
  constructor(private httpCliente: HttpClient) {}

  findCountryFlag(abbreviationCountry: string): any {
    return `${API_URL}/${abbreviationCountry}`;
  }
}
