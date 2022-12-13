import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
})
export class SearchHeaderComponent {
  constructor(private dataService: DataService) {}

  onSearchChange(data: any) {
    this.dataService.addSearch(data);
  }

  searchTerm: any;
}
