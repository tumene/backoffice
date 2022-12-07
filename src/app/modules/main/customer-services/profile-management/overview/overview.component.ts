import { CifService } from './../../../../../core/services/cif/cif.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from 'src/app/core/contansts/tickets.mockdata';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {
  panelOpenState = {
    additionalInfo: false,
    mandate: true,
    signatories: false
  };
  currentCorporateData: any;
  displayedColumns: string[] = [
    'subject',
    'customerName',
    'customerCIF',
    'ticketID',
    'createdBy',
    'dateCreated',
    'status',
    'action'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router, private cifService: CifService) {}

  ngOnInit(): void {
    this.cifService.selectedCorproate$.subscribe(data => {
      this.currentCorporateData = data;
    });

    console.log(this.currentCorporateData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  navigate() {
    this.router.navigate(['/customer-services/corporate-onboarding']);
  }

  action() {
    this.router.navigate(['/customer-services']);
  }
}
