import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { StatCardComponent } from '../components/stat-card/stat-card.component';
import { AreaChartComponent } from '../components/area-chart/area-chart.component';
import { DonutChartComponent } from '../components/donut-chart/donut-chart.component';

import { ExchangeRatesService } from '../services/exchange-rates-service.service';

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

  loading: boolean = true;

  constructor(private ExchangeRatesService: ExchangeRatesService) {}

  ngOnInit(): void {
    this.getExchangeRatesData();
  }

  getExchangeRatesData() {
    const today = new Date();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const format = (d: Date) => d.toISOString().split('T')[0];

    const todayStr = format(today);
    const yesterdayStr = format(yesterday);

    // today
    this.ExchangeRatesService.getRateByDate(todayStr).subscribe((todayRes) => {
      console.log(todayRes[0]);

      this.todayRate = todayRes[0].rate;

      // yesterday
      this.ExchangeRatesService.getRateByDate(yesterdayStr).subscribe(
        (yestRes) => {
          this.yesterdayRate = yestRes[0].rate;

          console.log(yestRes[0]);

          this.calculateChange();
          console.log(this.changeRatePercent);
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
}
