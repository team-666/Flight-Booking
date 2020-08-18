import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { FooterComponent } from './menu/footer/footer.component';
import { FlightsComponent } from './admin/flights/flights.component';
import { FlightListComponent } from './admin/flights/flight-list/flight-list.component';
import { FlightDetailComponent } from './admin/flights/flight-detail/flight-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { CreateFlightComponent } from './admin/flights/create-flight/create-flight.component';
import { FlightService } from './admin/flights/services/flight.service';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './menu/home/home.component';
import { FlightBookingComponent } from './user/flight-booking/flight-booking.component';
import { FlighSearchComponent } from './user/fligh-search/fligh-search.component';
import { SearchListComponent } from './user/search-list/search-list.component';
import { LetterBoldPipe } from './user/service/letter-bold.pipe';
import { SearchFilterPipe } from './user/service/filter-pipe';
import { ClickOutsideDirective } from './user/service/dropdown.directive';

import { SearchFilterToPipe } from './user/service/filter-to-pipe';
import { LetterBoldToPipe } from './user/service/letter-bold-to.pipe';
import { BookingComponent } from './user/search-list/booking/booking.component';
import { PaymentComponent } from './user/payment/payment.component';
import { ContactComponent } from './menu/contact/contact.component';
import { LoginComponent } from './menu/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FindBookedFlightComponent } from './user/manage-booking/find-booked-flight/find-booked-flight.component';
import { ShowBookedFlightComponent } from './user/manage-booking/show-booked-flight/show-booked-flight.component';
import { ModifyBookedFlightComponent } from './user/manage-booking/modify-booked-flight/modify-booked-flight.component';
import { AddBookedFlightComponent } from './add-booked-flight/add-booked-flight.component';


import { ManageBookingComponent } from './user/manage-booking/manage-booking.component';
import { LogoutComponent } from './menu/logout/logout.component';
import { BookingConfirmedComponent } from './user/search-list/booking-confirmed/booking-confirmed.component';


//import { MatAutocomplete } from '@angular/material/autocomplete/autocomplete';
//import { MatAutocompleteModule } from '@angular/material/autocomplete/autocomplete-module';

//import { MatInputModule } from '@angular/material/input/input-module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FlightsComponent,
    FlightListComponent,
    FlightDetailComponent,
    CreateFlightComponent,
    HomeComponent,
    FlightBookingComponent,
    FlighSearchComponent,
    SearchListComponent, 
    LetterBoldPipe,
    SearchFilterPipe,
    ClickOutsideDirective,
    SearchFilterToPipe,
    LetterBoldToPipe,
    BookingComponent,
    PaymentComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    FindBookedFlightComponent,
    ShowBookedFlightComponent,
    ModifyBookedFlightComponent,
    AddBookedFlightComponent,
    ManageBookingComponent,
    LogoutComponent,
    BookingConfirmedComponent,
  //  MatAutocomplete   
  ],
  imports: [ 
    MbscModule, 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // MatAutocompleteModule,
    //MatInputModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'login',pathMatch: 'full'},
      { path:"login",component: LoginComponent},
      {path:"signup",component: SignupComponent},
      {path:"list",component: FlightsComponent },
      {path:"list/create",component: CreateFlightComponent},
     {path:"home",component: HomeComponent },
      {path:"search", component: FlighSearchComponent},
      {path:"contact",component: ContactComponent},
      {path:"searchList",component: SearchListComponent},
      {path:"booking",component: FlightBookingComponent },
      {path:"showDetails",component: BookingComponent },
      { path:"payment", component: PaymentComponent}, 
      {path: 'confirmBooking', component: BookingConfirmedComponent},
     // {path: 'scheduledFlight/add', component: AddBookedFlightComponent},
    //  {path: 'scheduledFlight/show', component:ShowBookedFlightComponent},
     // {path: 'scheduledFlight/search', component:FindBookedFlightComponent},
      {path: 'scheduledFlight/modify', component: ModifyBookedFlightComponent},
      {path: 'manage', component: ModifyBookedFlightComponent},
      {path: 'logout', component: LogoutComponent},
    ])
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
