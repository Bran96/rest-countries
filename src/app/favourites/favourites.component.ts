import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../services/favourites.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favoriteCountries: any[] = [];
  favoritesSubscription!: Subscription;

  constructor(private favouritesService: FavouritesService, private router: Router) {}

  ngOnInit(): void {
    this.getFavourites();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  getFavourites() {
    this.favoritesSubscription = this.favouritesService.getFavorites().subscribe(favorites => {
      this.favoriteCountries = favorites;
    });
  }

  ngOnDestroy(): void {
    this.favoritesSubscription.unsubscribe();
  }

  removeFromFavorites(favourite: any): void {
    this.favouritesService.removeFavorite(favourite.cca3);
  }
}
