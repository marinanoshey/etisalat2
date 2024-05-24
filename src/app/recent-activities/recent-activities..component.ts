import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-recent-activities.',
  templateUrl: './recent-activities..component.html',
  styleUrl: './recent-activities..component.css'
})
export class RecentActivitiesComponent {

  activities: any[] = [];
  constructor(private JobService: JobService) { }

  ngOnInit() {
    this.JobService.getPosts().subscribe(data => {
      this.activities = data;
    });
  }

}
