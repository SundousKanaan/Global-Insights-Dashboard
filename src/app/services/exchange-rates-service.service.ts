import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RatesResponse {
  base: string;
  date: string;
  quote: string;
  rate: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  private apiURL = 'https://api.frankfurter.dev/v2/rates';
  constructor(private http: HttpClient) {}

  getRateByDate(date: string) {
    return this.http.get<any>(
      `${this.apiURL}?base=EUR&date=${date}&quotes=USD`,
    );
  }
}
