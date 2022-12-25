import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalisComponent } from './company/components/detalis/detalis.component';
import { HomePageComponent } from './company/components/home-page/home-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomePageComponent },
  { path: 'details/:page/:id', component: DetalisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
