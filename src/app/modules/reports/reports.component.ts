import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})


export class ReportsComponent implements AfterViewInit {
 data = [
   {
     source: 'Generator',
     date: '03/17/2021',
     run_hours: '7.8',
    fuel_consumed: '14.3',
    fuel_per_hour: '1.83',
   },
   {
    source: 'Generator',
    date: '03/17/2021',
    run_hours: '7.8',
   fuel_consumed: '14.3',
   fuel_per_hour: '1.83',
  },
  {
    source: 'Generator',
    date: '03/17/2021',
    run_hours: '7.8',
   fuel_consumed: '14.3',
   fuel_per_hour: '1.83',
  },
  {
    source: 'Generator',
    date: '03/17/2021',
    run_hours: '7.8',
   fuel_consumed: '14.3',
   fuel_per_hour: '1.83',
  },
  {
    source: 'Generator',
    date: '03/17/2021',
    run_hours: '7.8',
   fuel_consumed: '14.3',
   fuel_per_hour: '1.83',
  },
  {
    source: 'Generator',
    date: '03/17/2021',
    run_hours: '7.8',
   fuel_consumed: '14.3',
   fuel_per_hour: '1.83',
  },
 ]
  

  constructor() { 
    
  }

  ngAfterViewInit() {
   
  }

  
}


  // ngOnInit(): void {
  // }

// }
