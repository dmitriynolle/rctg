import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Judge1Component} from './judge/judge1/judge1.component';
import {Judge2Component} from './judge/judge2/judge2.component';
import {RegistrationComponent} from './organizer/registration/registration.component';
import {MainComponent} from './main/main.component';
import {OrganizerComponent} from './organizer/organizer.component';
import {ResultComponent} from './organizer/result/result.component';
import {FinesComponent} from './organizer/fines/fines.component';
import {IndexComponent} from "./index/index.component";

const appRoutes = [
  {path: '', component: IndexComponent},
  {path: 'main', component: MainComponent},
  {path: 'org', component: OrganizerComponent},
  {path: 'org1', component: RegistrationComponent},
  {path: 'org2', component: ResultComponent},
  {path: 'org3', component: FinesComponent},
  {path: 'su1/:game', component: Judge1Component},
  {path: 'su2/:game/:user/:su', component: Judge2Component},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
