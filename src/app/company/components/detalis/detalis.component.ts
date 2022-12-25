import { PaginationService } from './../../../service/pagination.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.scss'],
})
export class DetalisComponent implements OnInit {
  companyInfo: any = {};
  constructor(
    private _pagin: PaginationService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showDetails();
  }

  showDetails() {
    let id: number = this._route.snapshot.params['id'],
      page: number = this._route.snapshot.params['page'];

    this._pagin.showCompanies(page).subscribe((res) => {
      res.data.forEach((e: any) => {
        if (e.id == id) {
          this.companyInfo = e;

          console.log(this.companyInfo);
        }
      });
    });
  }
}
