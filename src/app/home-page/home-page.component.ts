import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { StatCardComponent } from '../components/stat-card/stat-card.component';
import { AreaChartComponent } from '../components/area-chart/area-chart.component';
import { DonutChartComponent } from '../components/donut-chart/donut-chart.component';

import { ExchangeRatesService } from '../services/exchange-rates.service';
import { weatherService } from '../services/weather.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [StatCardComponent, AreaChartComponent, DonutChartComponent, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  todayRate!: number;
  yesterdayRate!: number;
  changeRatePercent!: number;

  temperature!: number;
  changeTemperaturePercent!: number;

  loading: boolean = true;

  constructor(
    private ExchangeRatesService: ExchangeRatesService,
    private TemperatureService: weatherService,
  ) {}

  ngOnInit(): void {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const format = (d: Date) => d.toISOString().split('T')[0];
    const todayStr = format(today);
    const yesterdayStr = format(yesterday);

    this.getExchangeRatesData(todayStr, yesterdayStr);
    this.getWeatherData(todayStr);
  }

  getExchangeRatesData(todayStr: string, yesterdayStr: string) {
    // today
    this.ExchangeRatesService.getRateByDate(todayStr).subscribe((todayRes) => {
      // console.log(todayRes[0]);

      this.todayRate = todayRes[0].rate;

      // yesterday
      this.ExchangeRatesService.getRateByDate(yesterdayStr).subscribe(
        (yestRes) => {
          this.yesterdayRate = yestRes[0].rate;

          // console.log(yestRes[0]);

          this.calculateChange();
          // console.log(this.changeRatePercent);
        },
      );

      this.loading = false;
    });
  }

  calculateChange() {
    if (!this.yesterdayRate) return;

    this.changeRatePercent =
      ((this.todayRate - this.yesterdayRate) / this.yesterdayRate) * 100;

    this.changeRatePercent = Number(this.changeRatePercent.toFixed(2));
  }

  // temperature;
  // changeTemperaturePercent;
  getWeatherData(today: string) {
    this.TemperatureService.getWeather(today).subscribe({
      next: (data) => {
        const currentHour = new Date().getHours();

        const currentTemp = data.hourly.temperature_2m[currentHour];
        const previousTemp = data.hourly.temperature_2m[currentHour - 1];

        this.temperature = currentTemp;
        const tempChange = (
          ((currentTemp - previousTemp) / previousTemp) *
          100
        ).toFixed(1);

        this.changeTemperaturePercent = parseInt(tempChange);
      },
      error(err) {
        console.error(err);
      },
    });
  }
}
