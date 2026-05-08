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
  selector: 'app-donut-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.css',
})
export class DonutChartComponent {
  public chartOptions: Partial<ChartOptions> = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 380,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: (val, opts) => {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 365,
          },
          legend: {
            position: 'right',
          },
        },
      },
    ],
  };
}
