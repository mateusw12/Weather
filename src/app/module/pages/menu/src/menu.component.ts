import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthenticationService,
  ErrorHandler,
} from '@module/utils/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private errorHandler: ErrorHandler
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  private handleError(error: unknown): void {
    this.errorHandler.present(error);
  }

}
