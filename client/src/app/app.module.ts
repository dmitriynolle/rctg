import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Judge1Component} from './judge/judge1/judge1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Judge2Component} from './judge/judge2/judge2.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './organizer/registration/registration.component';
import {EtapmenuComponent} from './etapmenu/etapmenu.component';
import {ResultComponent} from './rating/result/result.component';
import {OrganizermenuComponent} from './organizer/organizermenu/organizermenu.component';
import {FinesComponent} from './organizer/fines/fines.component';
import {PasswordComponent} from './password/password.component';
import { RatingNNComponent } from './rating/rating-nn/rating-nn.component';
import { MainComponent } from './main/main.component';
import { RatingGlobalComponent } from './rating/rating-global/rating-global.component';
import { SprintComponent } from './judge/sprint/sprint.component';
import { RatingPilotovComponent } from './rating/rating-pilotov/rating-pilotov.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Judge1Component,
    Judge2Component,
    RegistrationComponent,
    EtapmenuComponent,
    ResultComponent,
    OrganizermenuComponent,
    FinesComponent,
    PasswordComponent,
    RatingNNComponent,
    MainComponent,
    RatingGlobalComponent,
    SprintComponent,
    RatingPilotovComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
