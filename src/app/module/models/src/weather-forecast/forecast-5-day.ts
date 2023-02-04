export class Forecast5Day {
  cod: string = '';
  message: number = 0;
  cnt: number = 0;
  list: ForecastDay[] = [];
}

export class ForecastDay {
  dt: number = 0;
  main: ForecastMain = new ForecastMain();
  weather: ForecastWeather[] = [];
  clouds: ForecastCloud = new ForecastCloud();
  wind: ForecastWind = new ForecastWind();
  visibility: number = 0;
  pop: number = 0;
  rain: ForecastRain = new ForecastRain();
  sys: ForecastSys = new ForecastSys();
  dt_txt: string = '';
}

export class ForecastSys {
  pod: string = '';
}

export class ForecastRain {
  hhh: number = 0;
}

export class ForecastWind {
  speed: number = 0;
  deg: number = 0;
  gust: number = 0;
}

export class ForecastCloud {
  all: number = 0;
}

export class ForecastMain {
  temp: number = 0;
  feels_like: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  pressure: number = 0;
  sea_level: number = 0;
  grnd_level: number = 0;
  humidity: number = 0;
  temp_kf: number = 0;
}

export class ForecastWeather {
  id: number = 0;
  main: string = '';
  description: string = '';
  icon: string = '';
}
