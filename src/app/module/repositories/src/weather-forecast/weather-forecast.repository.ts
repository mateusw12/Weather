import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CurrentCordinatesCity,
  Forecast5Day,
  MyWeatherForecast,
  WeatherForecast,
} from '@module/models';
import { JsonConvert } from '@module/utils/serialization';
import { Observable } from 'rxjs';

const API_KEY = '192be8018e2f9725ef298cec783bbd56';

const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const GEOGRAPHICAL_CORDINATES_API_URL =
  'http://api.openweathermap.org/geo/1.0/direct?q=';

const API_URL = '/api/clima/previsao-tempo';

const FORECAST_5_DAY_API_URL =
  'https://api.openweathermap.org/data/2.5/forecast?';

@Injectable({ providedIn: 'root' })
export class WeatherForecastRepository {
  constructor(private httpCliente: HttpClient) {}

  findCurrentForecast(lat: number, lon: number): Observable<WeatherForecast> {
    return this.httpCliente.get<WeatherForecast>(
      `${OPEN_WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
  }

  getCurrentCoridantesCity(city: string): Observable<CurrentCordinatesCity> {
    return this.httpCliente.get<CurrentCordinatesCity>(
      `${GEOGRAPHICAL_CORDINATES_API_URL}/${city}&limit=5&appid=${API_KEY}&units=metric`
    );
  }

  findForecast5Day(lat: number, lon: number): Observable<Forecast5Day> {
    return this.httpCliente.get<Forecast5Day>(
      `${FORECAST_5_DAY_API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
  }

  add(model: MyWeatherForecast): Observable<void> {
    return this.httpCliente.post<void>(API_URL, model);
  }

  findById(id: number): Observable<MyWeatherForecast> {
    return this.httpCliente.get<MyWeatherForecast>(`${API_URL}/${id}`);
  }

  findByUserName(userName: string): Observable<MyWeatherForecast[]> {
    return this.httpCliente.get<MyWeatherForecast[]>(
      `${API_URL}/userName/${userName}`
    );
  }

  deleteById(id: number): Observable<void> {
    return this.httpCliente.delete<void>(`${API_URL}/${id}`);
  }
}
