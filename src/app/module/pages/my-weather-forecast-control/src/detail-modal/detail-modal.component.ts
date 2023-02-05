import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyWeatherForecast } from '@module/models';
import { WeatherForecastRepository } from '@module/repositories';
import { ModalComponent } from '@module/shared';
import { untilDestroyedAsync } from '@module/utils/common';
import { ErrorHandler } from '@module/utils/services';

interface FormModel {
  id: FormControl<number | null>;
  city: FormControl<string | null>;
  temperature: FormControl<number | null>;
  temperatureMax: FormControl<number | null>;
  temperatureMin: FormControl<number | null>;
  humidity: FormControl<number | null>;
  wind: FormControl<number | null>;
  icon: FormControl<string | null>;
  weatherDate: FormControl<Date | null>;
}

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
})
export class DetailModalControlComponent implements OnInit, OnDestroy {
  form = this.createForm();

  @ViewChild(ModalComponent, { static: true })
  private modal!: ModalComponent;

  constructor(
    private errorHandler: ErrorHandler,
    private weatherForecastRepository: WeatherForecastRepository
  ) {}

  ngOnInit(): void {}

  async onOpen(id: number): Promise<void> {
    try {
      await this.findWeatherForecast(id);
      this.modal.open();
    } catch (error) {
      this.handleError(error);
    }
  }

  onModalClose(): void {
    this.modal.onCloseClick();
  }

  ngOnDestroy(): void {}

  private async findWeatherForecast(id: number): Promise<void> {
    const weather = await untilDestroyedAsync(
      this.weatherForecastRepository.findById(id),
      this
    );

    this.populateForm(weather);
  }

  private populateForm(model: MyWeatherForecast): void {
    this.form.patchValue({
      city: model.city,
      humidity: model.humidity,
      id: model.id,
      temperature: model.temperature,
      temperatureMax: model.temperatureMax,
      temperatureMin: model.temperatureMin,
      weatherDate: model.weatherDate,
      wind: model.wind,
      icon: model.icon,
    });
  }

  private handleError(error: unknown): void {
    this.errorHandler.present(error);
  }

  private createForm(): FormGroup<FormModel> {
    return new FormGroup<FormModel>({
      id: new FormControl<number | null>(null),
      city: new FormControl<string | null>(null),
      humidity: new FormControl<number | null>(null),
      wind: new FormControl<number | null>(null),
      temperature: new FormControl<number | null>(null),
      temperatureMax: new FormControl<number | null>(null),
      temperatureMin: new FormControl<number | null>(null),
      icon: new FormControl<string | null>(null),
      weatherDate: new FormControl<Date | null>(null),
    });
  }
}
