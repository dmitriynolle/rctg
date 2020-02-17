import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Judge1Component} from './judge/judge1/judge1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Judge2Component} from './judge/judge2/judge2.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './organizer/registration/registration.component';
import {MainComponent} from './main/main.component';
import {ResultComponent} from './organizer/result/result.component';
import {OrganizerComponent} from './organizer/organizer.component';
import {FinesComponent} from './organizer/fines/fines.component';
import {IndexComponent} from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    Judge1Component,
    Judge2Component,
    RegistrationComponent,
    MainComponent,
    ResultComponent,
    OrganizerComponent,
    FinesComponent,
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
