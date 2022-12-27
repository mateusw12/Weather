export class WeatherForecast {
  coord: Cordinate = new Cordinate();
  weather: Weather[] = [];
  base: string = '';
  main: WeatherMain = new WeatherMain();
  visibility: number = 0;
  wind: WeatherWind = new WeatherWind();
  clouds: WeatherClouds = new WeatherClouds();
  dt: number = 0;
  sys: WeatherSystem = new WeatherSystem();
  timezone: number = 0;
  id: number = 0;
  name: string = '';
  cod: number = 0;
}

export class Cordinate {
  lon: number = 0;
  lat: number = 0;
}

export class Weather {
  id: number = 0;
  main: string = '';
  description: string = '';
  icon: string = '';
}

export class WeatherMain {
  temp: number = 0;
  feels_like: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  pressure: number = 0;
  humidity: number = 0;
}

export class WeatherWind {
  speed: number = 0;
  deg: number = 0;
}

export class WeatherClouds {
  all: number = 0;
}

export class WeatherSystem {
  type: number = 0;
  country: string = '';
  sunrise: number = 0;
  sunset: number = 0;
}
