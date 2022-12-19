import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@module/models';
import { UserRepository } from '@module/repositories';
import { untilDestroyed } from '@module/utils/common';
import { markAllAsTouched } from '@module/utils/forms';
import { ErrorHandler, ToastService } from '@module/utils/services';
import { SettingService } from '../setting.service';

interface FormModel {
  userName: FormControl<string | null>;
  password: FormControl<string | null>;
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  id: FormControl<number | null>;
}

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
})
export class MyAccountComponent implements OnInit, OnDestroy {
  form = this.createForm();

  constructor(
    private errorHandler: ErrorHandler,
    private toastService: ToastService,
    private userRepository: UserRepository,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.form.reset();
    this.serviceEvents();
  }

  onSaveClick(): void {
    if (this.form.invalid) {
      markAllAsTouched(this.form);
      return;
    }
    const model = this.getModel();

    this.userRepository
      .updateById(model)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.toastService.showSuccess();
        },
        (error) => this.handleError(error)
      );
  }

  ngOnDestroy(): void {}

  private serviceEvents(): void {
    this.settingService
      .onMyAccountLoad()
      .pipe(untilDestroyed(this))
      .subscribe(
        () => this.loadData(),
        (error) => this.handleError(error)
      );
  }

  private loadData(): void {
    this.userRepository
      .findMe()
      .pipe(untilDestroyed(this))
      .subscribe(
        (user) => this.populateForm(user),
        (error) => this.handleError(error)
      );
  }

  private populateForm(model: User): void {
    this.form.patchValue({
      email: model.email,
      id: model.id,
      name: model.name,
      password: '',
      userName: model.userName,
    });
  }

  private getModel(): User {
    const model = new User();
    const formValue = this.form.getRawValue();
    model.email = formValue.email as string;
    model.id = formValue.id as number;
    model.name = formValue.name as string;
    model.password = formValue.password as string;
    model.userName = formValue.userName as string;
    return model;
  }

  private handleError(error: unknown): void {
    this.errorHandler.present(error);
  }

  private createForm(): FormGroup<FormModel> {
    return new FormGroup<FormModel>({
      id: new FormControl<number | null>(null, [Validators.required]),
      userName: new FormControl<string | null>(null, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      password: new FormControl<string | null>(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
      name: new FormControl<string | null>(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
      email: new FormControl<string | null>(null, [
        Validators.email,
        Validators.maxLength(200),
      ]),
    });
  }
}
