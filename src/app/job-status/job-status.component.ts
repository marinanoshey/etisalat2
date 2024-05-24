import { Component, Input, ViewChild } from '@angular/core';
import { JobService } from '../job.service';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from 'ng-apexcharts';




export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
};

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrl: './job-status.component.css'
})
export class JobStatusComponent {

  currentProgress = 100;



}
