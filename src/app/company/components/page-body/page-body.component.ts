import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss'],
})
export class PageBodyComponent implements OnInit {
  nextNumberPage = 1;
  companyPagnation: any[] = [];
  currentPage!: number;

  constructor(private _PaginationService: PaginationService) {}
  ngOnInit(): void {
    this._PaginationService.showCompanies(2).subscribe((res) => {
      this.companyPagnation = res.data;
    });
  }

  next(pageNumber: any) {
    this.nextNumberPage += Number.parseInt(pageNumber);
    this._PaginationService
      .showCompanies(this.nextNumberPage)
      .subscribe((res) => {
        this.companyPagnation = res.data;
        this.currentPage = res.pagination.meta.current_page;
      });
  }
  prev(pageNumber: any) {
    this.nextNumberPage -= Number.parseInt(pageNumber);
    this._PaginationService
      .showCompanies(this.nextNumberPage)
      .subscribe((res) => {
        this.companyPagnation = res.data;
        this.currentPage = res.pagination.meta.current_page;
      });
  }
}
