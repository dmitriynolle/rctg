import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Judge1Component} from './judge/judge1/judge1.component';
import {Judge2Component} from './judge/judge2/judge2.component';
import {RegistrationComponent} from './organizer/registration/registration.component';
import {MainmenuComponent} from './organizer/mainmenu/mainmenu.component';
import {OrganizerComponent} from './organizer/organizer.component';
import {ResultComponent} from './rating/result/result.component';
import {FinesComponent} from './organizer/fines/fines.component';
import {PasswordComponent} from './password/password.component';
import {RatingNNComponent} from './rating/rating-nn/rating-nn.component';
import {MainComponent} from './main/main.component';
import {RatingGlobalComponent} from "./rating/rating-global/rating-global.component";

const appRoutes = [
  {path: '', component: MainComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'mainmenu', component: MainmenuComponent},
  {path: 'org', component: OrganizerComponent},
  {path: 'org1', component: RegistrationComponent},
  {path: 'org2', component: ResultComponent},
  {path: 'org3', component: FinesComponent},
  {path: 'su1/:game', component: Judge1Component},
  {path: 'su2/:game/:user/:su', component: Judge2Component},
  {path: 'ratingNN', component: RatingNNComponent},
  {path: 'ratingGlobal', component: RatingGlobalComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
