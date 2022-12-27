import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Notification } from '@module/models';
import { NotificationRepository } from '@module/repositories';
import { untilDestroyed } from '@module/utils/common';
import { markAllAsTouched } from '@module/utils/forms';
import { ErrorHandler, ToastService } from '@module/utils/services';
import { SettingService } from '../setting.service';

interface FormModel {
  id: FormControl<number | null>;
  sendEmail: FormControl<boolean | null>;
  email: FormControl<string | null>;
  breakingDay: FormControl<number | null>;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit, OnDestroy {
  form = this.createForm();

  get disabledRemoveButton(): boolean {
    return Number(this.form.controls.id.value) <= 0;
  }

  constructor(
    private errorHandler: ErrorHandler,
    private toastService: ToastService,
    private notificationRepository: NotificationRepository,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.reset();
    this.serviceEvents();
  }

  async onSaveClick(): Promise<void> {
    if (!this.form.valid) {
      markAllAsTouched(this.form);
      return;
    }
    const model = this.getModel();
    const exists = model.id > 1;

    (exists
      ? this.notificationRepository.updateById(model)
      : this.notificationRepository.add(model)
    )
      .pipe(untilDestroyed(this))
      .subscribe(
        async () => {
          this.toastService.showSuccess();
          this.reset();
          this.loadData();
        },
        async (error) => this.handleError(error)
      );
  }

  onRemoveClick(): void {
    const id = this.form.controls.id.value as number;
    if (id <= 0) return;
    this.notificationRepository
      .deleteById(id)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.toastService.showRemove();
          this.reset();
        },
        (error) => this.handleError(error)
      );
  }

  ngOnDestroy(): void {}

  private serviceEvents(): void {
    this.settingService
      .onNotificationLoad()
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.reset();
          this.loadData();
        },
        (error) => this.handleError(error)
      );
  }

  private loadData(): void {
    this.notificationRepository
      .find()
      .pipe(untilDestroyed(this))
      .subscribe(
        (notification) => {
          this.populateForm(notification);
        },
        (error) => this.handleError(error)
      );
  }

  private populateForm(model: Notification): void {
    this.form.patchValue({
      id: model.id,
      breakingDay: model.breakingDay,
      email: model.email,
      sendEmail: model.sendEmail,
    });
  }

  private reset(): void {
    this.form.reset();
  }

  private getModel(): Notification {
    const model = new Notification();
    const formValue = this.form.getRawValue();
    model.id = formValue.id as number;
    model.breakingDay = formValue.breakingDay as number;
    model.email = formValue.email as string;
    model.sendEmail = formValue.sendEmail as boolean;
    return model;
  }

  private handleError(error: unknown): void {
    this.errorHandler.present(error);
  }

  private createForm(): FormGroup<FormModel> {
    return new FormGroup<FormModel>({
      id: new FormControl<number | null>(null),
      breakingDay: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(999),
      ]),
      email: new FormControl<string | null>(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(300),
      ]),
      sendEmail: new FormControl<boolean | null>(null, [Validators.required]),
    });
  }
}
