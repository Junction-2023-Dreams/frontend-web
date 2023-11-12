import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSortModule, Sort} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {PatientsService} from "@app/_services/patients.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [CommonModule, MatSortModule, MatTableModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css'
})
export class PatientsListComponent implements OnInit, OnChanges{

  displayedColumns: string[] = ['lastname', 'firstname', 'email', 'risk'];
  searchText: any = '';
  searchedPatients: any = [];
  @Input() allPatients: any = [];

  constructor(
    private patientService: PatientsService,
  ) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth < 600) {
      this.displayedColumns = ['lastname', 'firstname', 'risk'];
    } else {
      this.displayedColumns = ['lastname', 'firstname', 'email', 'risk'];
    }
  }

  openPatient($event: MouseEvent, patient: any) {

  }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['allPatients'].currentValue !== changes['allPatients'].previousValue) {
      this.searchedPatients = this.allPatients;
    }
  }

  ngOnInit(): void {
    if(window.innerWidth < 600) {
      this.displayedColumns = ['lastname', 'firstname', 'risk'];
    }
    this.searchedPatients = this.allPatients;
  }
  openFilter() {

  }

  search(searchText: any) {
    this.searchedPatients = this.allPatients.filter((item: any) => (item.lastname + " " + item.firstname + " " + item.lastname).toLowerCase().includes(searchText.toLowerCase()));

  }
  sortData(sort: Sort) {
    const data = this.searchedPatients.slice();
    if (!sort.active || sort.direction === '') {
      this.search(this.searchText)
      return;
    }

    this.searchedPatients = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'lastname':
          return this.compare(a.lastname, b.lastname, isAsc);
        case 'firstname':
          return this.compare(a.firstname, b.firstname, isAsc);
        case 'email':
          return this.compare(a.email, b.email, isAsc);
        case 'risk':
          return this.compare(a.risk, b.risk, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
