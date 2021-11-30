import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
import { EighthComponent } from './eighth/eighth.component';
import { NinthComponent } from './ninth/ninth.component';
import { TenthComponent } from './tenth/tenth.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'third-component', component: ThirdComponent},
  { path: 'fourth-component', component: FourthComponent },
  { path: 'fifth-component', component: FifthComponent },
  { path: 'sixth-component', component: SixthComponent },
  { path: 'seventh-component', component: SeventhComponent },
  { path: 'eighth-component', component: EighthComponent },
  { path: 'ninth-component', component: NinthComponent },
  { path: 'tenth-component', component: TenthComponent },
  // { path: '**', component: PageNotFoundComponent },
    // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
