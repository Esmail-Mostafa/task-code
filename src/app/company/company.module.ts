import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { DetalisComponent } from './components/detalis/detalis.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    PageBodyComponent,
    DetalisComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class CompanyModule {}
