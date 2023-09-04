import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  applicationResult: string = '';
  balanceSheet: any;

  formData: any = {
    businessDetails: '',
    loanAmount: 0,
    accountingProvider: ''
  };

  constructor(private dataService: DataService) { }

  onSubmit(): void {
    // Submit application data to the backend
    this.dataService.submitApplication(this.formData).subscribe(
      (response: any) => {
        // console.log('Application submitted successfully:', response);
        this.applicationResult = 'Application submitted successfully';
  
        this.dataService.getBalanceSheet().subscribe(
          (balanceSheetData: any) => {
            this.balanceSheet = balanceSheetData;
            // console.log('Updated Balance Sheet Data:', this.balanceSheet);
          },
          (error: any) => {
            // console.error('Error fetching balance sheet data:', error);
            this.applicationResult = 'Error fetching balance sheet data: ' + error.message;
          }
        );
      },
      (error: any) => {
        // console.error('Error submitting application:', error);
        this.applicationResult = 'Error submitting application: ' + error.message;
      }
    );
  }
}