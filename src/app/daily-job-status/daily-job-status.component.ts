import { Component } from '@angular/core';
import { JobService } from '../job.service';
@Component({
  selector: 'app-daily-job-status',
  templateUrl: './daily-job-status.component.html',
  styleUrl: './daily-job-status.component.css'
})
export class DailyJobStatusComponent {

  dailyStatus = {
    totalJobs: 0,
    success: 0,
    inProgress: 0,
    failed: 0,
    retry: 0
  };

  constructor(private JobService: JobService) {}

  ngOnInit(): void {
    this.JobService.getPosts().subscribe(data => {
      this.dailyStatus.totalJobs = data.length;
      this.dailyStatus.success = data.filter(job => job.completed === true).length;
      this.dailyStatus.inProgress = data.filter(job => job.completed === false).length;
      this.dailyStatus.failed = data.filter(job => job.completed === false).length;
      this.dailyStatus.retry = data.filter(job => job.completed === false).length / 10; // Example calculation
    });
  }
}
