import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Su1Component} from './su/su1/su1.component';
import {Su2Component} from './su/su2/su2.component';
import {Org1Component} from './org/org1/org1.component';
import {MainComponent} from './main/main.component';
import {OrgComponent} from './org/org.component';
import {Org2Component} from './org/org2/org2.component';
import {Org3Component} from './org/org3/org3.component';

const appRoutes = [
  {path: '', component: MainComponent},
  {path: 'org', component: OrgComponent},
  {path: 'org1', component: Org1Component},
  {path: 'org2', component: Org2Component},
  {path: 'org3', component: Org3Component},
  {path: 'su1/:game', component: Su1Component},
  {path: 'su2/:game/:user/:su', component: Su2Component},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
