import { Component } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexLegend,
  ApexTooltip,
  ApexMarkers,
  ApexPlotOptions,
  ApexResponsive,
  ApexGrid,
  ApexAnnotations,
  ApexStates,
  ApexTheme,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  title?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  dataLabels?: ApexDataLabels;
  stroke?: ApexStroke;
  fill?: ApexFill;
  legend?: ApexLegend;
  tooltip?: ApexTooltip;
  markers?: ApexMarkers;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  grid?: ApexGrid;
  annotations?: ApexAnnotations;
  states?: ApexStates;
  theme?: ApexTheme;
  colors?: string[];
  labels?: any;
};

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.css',
})
export class AreaChartComponent {
  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: 'Trends',
        data: [
          {
            x: 'Dec 23 2017',
            y: null,
          },
          {
            x: 'Dec 24 2017',
            y: 44,
          },
          {
            x: 'Dec 25 2017',
            y: 31,
          },
          {
            x: 'Dec 26 2017',
            y: 38,
          },
          {
            x: 'Dec 27 2017',
            y: null,
          },
          {
            x: 'Dec 28 2017',
            y: 32,
          },
          {
            x: 'Dec 29 2017',
            y: 55,
          },
          {
            x: 'Dec 30 2017',
            y: 51,
          },
          {
            x: 'Dec 31 2017',
            y: 67,
          },
          {
            x: 'Jan 01 2018',
            y: 22,
          },
          {
            x: 'Jan 02 2018',
            y: 34,
          },
          {
            x: 'Jan 03 2018',
            y: null,
          },
          {
            x: 'Jan 04 2018',
            y: null,
          },
          {
            x: 'Jan 05 2018',
            y: 11,
          },
          {
            x: 'Jan 06 2018',
            y: 4,
          },
          {
            x: 'Jan 07 2018',
            y: 15,
          },
          {
            x: 'Jan 08 2018',
            y: null,
          },
          {
            x: 'Jan 09 2018',
            y: 9,
          },
          {
            x: 'Jan 10 2018',
            y: 34,
          },
          {
            x: 'Jan 11 2018',
            y: null,
          },
          {
            x: 'Jan 12 2018',
            y: null,
          },
          {
            x: 'Jan 13 2018',
            y: 13,
          },
          {
            x: 'Jan 14 2018',
            y: null,
          },
        ],
      },
    ],
    chart: {
      type: 'area',
      height: 350,
      animations: {
        enabled: true,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    fill: {
      opacity: 0.5,
      pattern: {
        width: 5,
        height: 6,
      },
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
    },
    tooltip: {
      intersect: true,
      shared: false,
    },
    theme: {
      palette: 'palette1',
    },
    xaxis: {
      type: 'datetime',
    },
  };
}
