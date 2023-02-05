import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  UserRepository,
  WeatherForecastRepository,
} from '@module/repositories';
import { FormGridCommandEventArgs } from '@module/shared';
import { SfGridColumnModel, SfGridColumns } from '@module/shared/src/grid';
import { untilDestroyed, untilDestroyedAsync } from '@module/utils/common';
import {
  ErrorHandler,
  MessageService,
  ToastService,
} from '@module/utils/services';
import { DetailModalControlComponent } from './detail-modal/detail-modal.component';

interface GridRow {
  id: number;
  city: string;
  weatherDate: Date;
  temperature: number;
  detailColumn: string;
}

@Component({
  selector: 'app-my-weather-forecast-control',
  templateUrl: './my-weather-forecast-control.component.html',
  styleUrls: ['./my-weather-forecast-control.component.scss'],
})
export class MyWeatherForecastControlComponent implements OnInit, OnDestroy {
  dataSource: GridRow[] = [];
  columns: SfGridColumnModel[] = [];

  @ViewChild(DetailModalControlComponent, { static: false })
  private detailModal!: DetailModalControlComponent;

  @ViewChild('ddetailolumn', { static: true })
  private detailColumnTemplate!: TemplateRef<unknown>;

  private user: string = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private errorHandler: ErrorHandler,
    private toastService: ToastService,
    private weatherForecastRepository: WeatherForecastRepository,
    private userRepository: UserRepository
  ) {}

  ngOnInit(): void {
    this.columns = this.createColumns();
    // this.getCurrentUser();
    this.loadData();
  }

  onCommand(event: FormGridCommandEventArgs): void {
    switch (event.command) {
      case 'Add':
        this.detailModal.onOpen(1);
        break;
      case 'Remove':
        this.onCommandRemove(event.rowData as GridRow);
        break;
      default:
        break;
    }
  }

  onDetailClick(gridRow: GridRow): void {
    this.detailModal.onOpen(gridRow.id);
  }

  onReturnClick(): void {
    this.router.navigate([`/menu`]);
  }

  ngOnDestroy(): void {}

  private async onCommandRemove(model: GridRow): Promise<void> {
    const confirmed = await this.messageService.showConfirmDelete();
    if (!confirmed) return;
    this.weatherForecastRepository
      .deleteById(model.id)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.toastService.showRemove();
          this.loadData();
        },
        (error) => this.handleError(error)
      );
  }

  private async getCurrentUser(): Promise<void> {
    try {
      const user = await untilDestroyedAsync(
        this.userRepository.findMe(),
        this
      );
      this.user = user.userName;
    } catch (error) {
      this.handleError(error);
    }
  }

  private loadData(): void {
    this.weatherForecastRepository
      .findByUserName(this.user)
      .pipe(untilDestroyed(this))
      .subscribe(
        (weatherForecasts) => {
          const dataSource: GridRow[] = [];

          for (const item of weatherForecasts) {
            dataSource.push({
              id: item.id,
              city: item.city,
              detailColumn: '',
              temperature: item.temperature,
              weatherDate: item.weatherDate,
            });
          }
          this.dataSource = dataSource;
        },
        (error) => this.handleError(error)
      );
  }

  private handleError(error: unknown): void {
    this.errorHandler.present(error);
  }

  private createColumns(): SfGridColumnModel[] {
    return SfGridColumns.build<GridRow>({
      detailColumn: SfGridColumns.text('detailColumn', 'Detalhar Previsão')
        .template(this.detailColumnTemplate)
        .minWidth(75)
        .identity(),
      id: SfGridColumns.text('id', 'Código').minWidth(75).isPrimaryKey(true),
      city: SfGridColumns.text('city', 'Cidade').minWidth(200),
      temperature: SfGridColumns.numeric('temperature', 'Temperatura').minWidth(
        200
      ),
      weatherDate: SfGridColumns.date(
        'weatherDate',
        'Data Previsão do Tempo'
      ).minWidth(100),
    });
  }
}
