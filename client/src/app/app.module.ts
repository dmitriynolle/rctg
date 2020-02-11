import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Su1Component} from './su/su1/su1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Su2Component} from './su/su2/su2.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Org1Component} from './org/org1/org1.component';
import {MainComponent} from './main/main.component';
import {Org2Component} from './org/org2/org2.component';
import {OrgComponent} from './org/org.component';
import {Org3Component} from './org/org3/org3.component';
import {IndexComponent} from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    Su1Component,
    Su2Component,
    Org1Component,
    MainComponent,
    Org2Component,
    OrgComponent,
    Org3Component,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
