import { Component } from '@angular/core';

export interface Status {
  value: any;
  viewValue: any;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  
  status: Status[] = [
    {value: '0', viewValue: '0'},
    {value: '1', viewValue: '1'}
  ];
  
  constructor() {
  }

  ngOnInit() {
  }

}
