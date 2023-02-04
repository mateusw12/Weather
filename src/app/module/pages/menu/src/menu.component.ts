import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@module/utils/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.authenticationService.clearUserToken();
    this.router.navigate([`/login`]);
  }

  onInformationClick(): void {
    this.router.navigate([`/informations`]);
  }

  onSettingClick(): void {
    this.router.navigate([`/settings`]);
  }

  onNewsClick(): void {
    this.router.navigate([`/news`]);
  }

  onWeatherForecastClick(): void {
    this.router.navigate([`/weather-forecast-registration`]);
  }
  
  onHelpMeClick(): void {
    this.router.navigate([`/help-me`]);
  }
}
