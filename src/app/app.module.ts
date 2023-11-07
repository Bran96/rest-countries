import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries-component/countries/countries.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryCardComponent } from './countries-component/country-card/country-card.component';
import { FilterComponent } from './countries-component/filter/filter.component';
import { SearchComponent } from './countries-component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouritesComponent } from './favourites/favourites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryModalComponent } from './countries-component/country-modal/country-modal.component';
import { FavouriteDetailsComponent } from './favourite-details/favourite-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HeaderComponent,
    CountryCardComponent,
    FilterComponent,
    SearchComponent,
    FavouritesComponent,
    CountryModalComponent,
    FavouriteDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
