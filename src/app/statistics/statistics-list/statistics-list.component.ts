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
  chatConfig = {
    xAxisLabel :'true',
    yAxisLabel : 'true'
  }
  
  dataList: any[] = [];

  constructor(private statisticsService:StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.connect();
    this.statisticsService.batleStatisticsMessage.subscribe((data)=>{
      console.log(data);
      let dataJson = JSON.parse(data);
      this.addOrUpdateData(dataJson.winner);
      this.dataList = [...this.dataList];
    });
  }

  addOrUpdateData(id:number):void{
    var index = this.dataList.findIndex((data)=> {
      return data.name === id.toString();
    });
    if(index !== -1){
      this.dataList[index].value += 1;
    }else{
      this.dataList.push({
        name: id.toFixed(),
        value: 1,
      })
    }
  }

  ngOnDestroy(): void {
    this.statisticsService.close();
  }



}
