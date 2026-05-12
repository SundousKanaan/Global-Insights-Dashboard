import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class weatherService {
  private http = inject(HttpClient);
  constructor() {}

  private apiURL = 'https://archive-api.open-meteo.com/v1/archive';

  getWeather(date: string) {
    return this.http.get<any>(
      `${this.apiURL}?latitude=52.23&longitude=4.55&start_date=${date}&end_date=${date}&hourly=temperature_2m,relative_humidity_2m&timezone=auto`,
    );
  }
}
