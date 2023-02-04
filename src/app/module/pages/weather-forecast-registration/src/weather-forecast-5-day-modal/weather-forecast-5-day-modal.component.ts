import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Forecast5Day, ForecastDay, ForecastWind } from '@module/models';
import { WeatherForecastRepository } from '@module/repositories';
import { ModalComponent } from '@module/shared';
import { untilDestroyed } from '@module/utils/common';
import { ErrorHandler } from '@module/utils/services';

interface Forecast {
  date: string;
  days: Day[];
}

interface Day {
  time: string;
  temp: number;
  humidity: number;
  wind: ForecastWind;
  icon: string;
}

@Component({
  selector: 'app-weather-forecast-5-day-registration',
  templateUrl: './weather-forecast-5-day-modal.component.html',
})
export class WeatherForecast5DayComponent implements OnInit, OnDestroy {
  forecastDays: Forecast[] = [];

  @ViewChild(ModalComponent, { static: true })
  private modal!: ModalComponent;

  constructor(
    private errorHandler: ErrorHandler,
    private weatherForecastRepository: WeatherForecastRepository
  ) {}

  ngOnInit(): void {}

  async onOpen(lat: number, lon: number): Promise<void> {
    await this.loadData(lat, lon);
    this.modal.open();
  }

  async onModalClose(): Promise<void> {
    this.modal.onCloseClick();
  }

  ngOnDestroy(): void {}

  private async loadData(lat: number, lon: number): Promise<void> {
    this.weatherForecastRepository
      .findForecast5Day(lat, lon)
      .pipe(untilDestroyed(this))
      .subscribe(
        (forecast: Forecast5Day) => {
          const forecastDays: ForecastDay[] = [];

          for (const item of forecast.list) {
            forecastDays.push(item);
          }
          this.createForecastDays(forecastDays);
        },
        (error) => this.handleError(error)
      );
  }

  private createForecastDays(forecastDays: ForecastDay[]): void {
    const forecasts: Forecast[] = [];

    for (const item of forecastDays) {
      const formatDate = new Date(item.dt_txt).toLocaleDateString('pt-BR');
      const time = new Date(item.dt_txt).toTimeString();

      if (!forecasts.some((el) => el.date === formatDate)) {
        forecasts.push({
          date: formatDate,
          days: [this.getForecastDay(item, time)],
        });
      } else {
        const forecast = forecasts.find((el) => el.date === formatDate);
        if (!forecast) continue;
        forecast.days.push(this.getForecastDay(item, time));
      }
    }
    this.forecastDays = forecasts;
  }

  private getForecastDay(item: ForecastDay, time: string): Day {
    return {
      time: time.split('GMT')[0],
      temp: this.calculateTemp(item.main.temp),
      humidity: item.main.humidity,
      wind: item.wind,
      icon: this.getWeatherIcon(item.weather[0].icon),
    };
  }

  private calculateTemp(temp: number): number {
    return parseInt(String(temp), 10) / 10;
  }

  private getWeatherIcon(icon: string): string {
    const weatherIconApi = 'http://openweathermap.org/img/wn';
    return `${weatherIconApi}/${icon}.png`;
  }

  private handleError(error: unknown): void {
    this.errorHandler.present(error);
  }
}
