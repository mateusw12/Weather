import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserRole } from '@module/models';
import { UserRepository } from '@module/repositories';
import { untilDestroyed } from '@module/utils/common';
import { markAllAsTouched } from '@module/utils/forms';
import { ErrorHandler, ToastService } from '@module/utils/services';

interface FormModel {
  userName: FormControl<string | null>;
  password: FormControl<string | null>;
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  id: FormControl<number | null>;
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  form = this.createForm();

  constructor(
    private router: Router,
    private toastService: ToastService,
    private errorHanlder: ErrorHandler,
    private userRepository: UserRepository
  ) {}

  ngOnInit(): void {}

  onReturnClick(): void {
    this.router.navigate([`/login`]);
  }

  onSaveClick(): void {
    if (this.form.invalid) {
      markAllAsTouched(this.form);
      return;
    }
    const model = this.getModel();
    this.userRepository
      .add(model)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => this.toastService.showSuccess(),
        (error) => this.handleError(error)
      );
  }

  ngOnDestroy(): void {}

  private getModel(): User {
    const model = new User();
    const formValue = this.form.getRawValue();
    model.email = formValue.email as string;
    model.id = 0;
    model.name = formValue.name as string;
    model.password = formValue.password as string;
    model.userName = formValue.userName as string;
    model.role = UserRole.Administrator;
    return model;
  }

  private handleError(error: unknown): void {
    this.errorHanlder.present(error);
  }

  private createForm(): FormGroup<FormModel> {
    return new FormGroup<FormModel>({
      id: new FormControl<number | null>(null),
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
