import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FavouritesService } from 'src/app/services/favourites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.css']
})
export class CountryModalComponent implements OnInit {
  country!: Country;
  isFavorite!: boolean;

  languageArray: string[] = [];
  languageString: string = '';
  currencyKeys: string[] = [];
  private favoritesSubscription!: Subscription;
  langauges: string[] = [];
  currencies: string[] = [];


  constructor(public modalRef: BsModalRef, private favoritesService: FavouritesService) {}

  ngOnInit(): void {
    this.favoritesSubscription = this.favoritesService.getFavorites().subscribe(favorites => {
      this.isFavorite = this.favoritesService.isFavorite(this.country.cca3);
    });

    if(this.country.languages){
      this.languageArray = Object.values(this.country.languages);
      this.languageString = this.buildDisplayForArray(this.languageArray);
    }

    if(this.country.currencies) {
      this.currencyKeys = Object.keys(this.country.currencies);
    }
  }

  ngOnDestroy(): void {
    this.favoritesSubscription.unsubscribe();
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(this.country.cca3);
    } else {
      this.favoritesService.addFavorite(this.country);
    }
    this.isFavorite = this.favoritesService.isCountryInFavorites(this.country.cca3);
  }

  buildDisplayForArray(array: string[]) {
    return array.join(', ')
  }
}
