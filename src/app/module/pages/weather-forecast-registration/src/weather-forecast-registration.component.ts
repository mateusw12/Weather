import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CurrentCordinatesCity,
  MyWeatherForecast,
  WeatherForecast,
} from '@module/models';
import {
  UserRepository,
  WeatherForecastRepository,
} from '@module/repositories';
import { untilDestroyed, untilDestroyedAsync } from '@module/utils/common';
import { markAllAsTouched } from '@module/utils/forms';
import {
  ErrorHandler,
  MessageService,
  ToastService,
} from '@module/utils/services';
import { debounceTime } from 'rxjs/operators';
import { WeatherForecast5DayComponent } from './weather-forecast-5-day-modal/weather-forecast-5-day-modal.component';

interface FormModel {
  city: FormControl<string | null>;
}

@Component({
  selector: 'app-weather-forecast-registration',
  templateUrl: './weather-forecast-registration.component.html',
  styleUrls: ['./weather-forecast-registration.component.scss'],
})
export class WeatherForecastRegistrationComponent implements OnInit, OnDestroy {
  form = this.createForm();
  loaded = false;

  get weatherIcon(): string {
    return this.icon;
  }

  get weatherCity(): string {
    return this.city;
  }

  get weatherTemperature(): number {
    return this.temperature;
  }

  get weatherTemperatureMin(): number {
    return this.temperatureMin;
  }

  get weatherTemperatureMax(): number {
    return this.temperatureMax;
  }

  get countryFlag(): string {
    return this.countryFlagUrl;
  }

  get weatherHumidity(): number {
    return this.humidity;
  }

  get weatherWind(): number {
    return this.wind;
  }

  private countryFlagUrl: string = '';
  private city: string = '';
  private temperature: number = 0;
  private temperatureMin: number = 0;
  private temperatureMax: number = 0;
  private icon: string = '';
  private humidity: number = 0;
  private wind: number = 0;
  private userName: string = '';
  private lat: number = 0;
  private lon: number = 0;

  @ViewChild(WeatherForecast5DayComponent, { static: false })
  private weatherForecastModal!: WeatherForecast5DayComponent;

  constructor(
    private router: Router,
    private weatherForecastRepository: WeatherForecastRepository,
    private userRepository: UserRepository,
    private errorHandler: ErrorHandler,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.formEvents();
    this.findMe();
  }

  async onReturnClick(): Promise<void> {
    this.router.navigate([`/menu`]);
  }

  async onSearchClick(): Promise<void> {
    if (this.form.invalid) {
      markAllAsTouched(this.form);
      return;
    }
    const formValue = this.form.getRawValue();
    const city = formValue.city as string;
    try {
      const cordinatesCity = await this.getCurrentCoridantesCity(city);
      const lat = Number(Number(cordinatesCity[0].lat).toPrecision(4));
      const lon = Number(Number(cordinatesCity[0].lon).toPrecision(4));
      const country = cordinatesCity[0].country;
      const currentWeatherForecast = await this.currentWeatherForecast(
        lat,
        lon
      );
      this.lat = lat;
      this.lon = lon;
      this.setCountryFlag(country);
      this.setWeatherInformation(currentWeatherForecast);
      this.loaded = true;
    } catch (error) {
      this.loaded = false;
      this.handleError(error);
    }
  }

  async onSaveClick(): Promise<void> {
    const model = this.getModel();
    this.weatherForecastRepository
      .add(model)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.form.reset();
          this.toastService.showSuccess();
        },
        (error) => this.handleError(error)
      );
  }

  onForecast5DayClick(): void {
    this.weatherForecastModal.onOpen(this.lat, this.lon);
  }

  ngOnDestroy(): void {}

  private async findMe(): Promise<void> {
    try {
      const user = await untilDestroyedAsync(
        this.userRepository.findMe(),
        this
      );
      this.userName = user.userName;
    } catch (error) {
      this.handleError(error);
    }
  }

  private formEvents(): void {
    this.form.controls.city.valueChanges
      .pipe(untilDestroyed(this), debounceTime(200))
      .subscribe(
        (value) => {
          if (!value) this.loaded = false;
        },
        (error) => this.handleError(error)
      );
  }

  private getModel(): MyWeatherForecast {
    const model = new MyWeatherForecast();
    model.id = 0;
    model.city = this.city;
    model.countryFlag = 'teste';
    model.humidity = this.humidity;
    model.icon = 'teste';
    model.temperature = this.temperature;
    model.temperatureMax = this.temperatureMax;
    model.temperatureMin = this.temperatureMin;
    model.wind = this.wind;
    model.weatherDate = new Date();
    model.userName = this.userName;
    console.log(model)
    return model;
  }

  private setWeatherInformation(weatherForecast: WeatherForecast): void {
    this.city = weatherForecast.name;
    this.temperature = this.calculateTemp(weatherForecast.main.temp);
    this.temperatureMax = this.calculateTemp(weatherForecast.main.temp_max);
    this.temperatureMin = this.calculateTemp(weatherForecast.main.temp_min);
    this.icon = this.getWeatherIcon(weatherForecast.weather[0].icon);
    this.humidity = weatherForecast.main.humidity;
    this.wind = weatherForecast.wind.speed;
    console.log('setWeatherInformation', this.city);
  }

  private getWeatherIcon(icon: string): string {
    const weatherIconApi = 'http://openweathermap.org/img/wn';
    return `${weatherIconApi}/${icon}.png`;
  }

  private calculateTemp(temp: number): number {
    return parseInt(String(temp), 10) / 10;
  }

  private setCountryFlag(abbreviationCountry: string): void {
    const countryApiFlag = 'https://countryflagsapi.com/png';
    this.countryFlagUrl = `${countryApiFlag}/${abbreviationCountry.toLowerCase()}`;
  }

  private async getCurrentCoridantesCity(
    city: string
  ): Promise<CurrentCordinatesCity> {
    return await untilDestroyedAsync(
      this.weatherForecastRepository.getCurrentCoridantesCity(city),
      this
    );
  }

  private async currentWeatherForecast(
    lat: number,
    log: number
  ): Promise<WeatherForecast> {
    return await untilDestroyedAsync(
      this.weatherForecastRepository.findCurrentForecast(lat, log),
      this
    );
  }

  private handleError(error: unknown): void {
    this.errorHandler.present(error);
  }

  private createForm(): FormGroup<FormModel> {
    return new FormGroup<FormModel>({
      city: new FormControl<string | null>(null, [
        Validators.minLength(0),
        Validators.required,
      ]),
    });
  }
}
