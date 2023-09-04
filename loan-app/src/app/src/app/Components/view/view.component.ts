import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  balanceSheet: any[] = [];
  applicationResult: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBalanceSheet().subscribe((data: any) => {
      this.balanceSheet = data;
    });

    this.dataService.getApplicationResult().subscribe((result: string) => {
      this.applicationResult = result;
    });
  }
}