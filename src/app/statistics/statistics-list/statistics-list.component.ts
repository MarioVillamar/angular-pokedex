import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit {

  battleData: Subject<string> = new Subject<string>();

  constructor(private statisticsService:StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.connect();
    this.statisticsService.batleStatisticsMessage.subscribe((data)=>{
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.statisticsService.close();
  }



}
