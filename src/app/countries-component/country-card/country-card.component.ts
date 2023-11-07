import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/models/country';
import { FavouritesService } from 'src/app/services/favourites.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CountryModalComponent } from '../country-modal/country-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {
  @Input() country!: Country;
  isFavorite!: boolean;
  modalRef!: BsModalRef;
  favoritesSubscription!: Subscription;

  constructor(private favoritesService: FavouritesService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.favoritesSubscription = this.favoritesService.getFavorites().subscribe(favorites => {
    this.isFavorite = this.favoritesService.isCountryInFavorites(this.country.cca3);
    });
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(this.country.cca3);
    } else {
      this.favoritesService.addFavorite(this.country);
    }
    this.isFavorite = this.favoritesService.isCountryInFavorites(this.country.cca3); // Update isFavorite state
  }

  openModal(): void {
    this.modalRef = this.modalService.show(CountryModalComponent, {
      initialState: {
        country: this.country
      },
      class: 'modal-dialog-centered' // Center the modal
    });
  }
}
