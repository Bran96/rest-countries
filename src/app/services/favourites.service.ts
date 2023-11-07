import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favoritesKey = 'favorites';
  private favoritesSubject = new BehaviorSubject<any[]>(this.getFavoritesFromStorage());

  constructor(private notificationService: NotificationService) { }

  addComment(cca3: string, comment: string, imageUrl?: string): void {
    const favorites = this.getFavoritesFromStorage();
    const timestamp = this.formatTimestamp(new Date());
    const newComment = { timestamp, comment, imageUrl };
    
    const countryIndex = favorites.findIndex(fav => fav.cca3 === cca3);
    if (countryIndex !== -1) {
      if (!favorites[countryIndex].comments) {
        favorites[countryIndex].comments = [];
      }
      favorites[countryIndex].comments.push(newComment);
      this.updateFavorites(favorites);
      this.notificationService.showNotification(`Comment added for ${favorites[countryIndex].name.common}.`);
    } else {
      this.notificationService.showNotification('Country not found in favorites.');
    }
  }

  private formatTimestamp(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  getFavorites(): Observable<any[]> {
    return this.favoritesSubject.asObservable();
  }

  getFavoritesFromStorage(): any[] {
    const favoritesJson = localStorage.getItem(this.favoritesKey);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  private updateFavorites(favorites: any[]): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  addFavorite(favorite: any): void {
    const favorites = this.getFavoritesFromStorage();
    favorites.push(favorite);
    this.updateFavorites(favorites);
    this.notificationService.showNotification(`${favorite.name.common} added to favorites.`);
  }

  removeFavorite(cca3: string): void {
    let favorites = this.getFavoritesFromStorage();
    favorites = favorites.filter(fav => fav.cca3 !== cca3);
    this.updateFavorites(favorites);
  }

  isFavorite(cca3: string): boolean {
    const favorites = this.getFavoritesFromStorage();
    return favorites.some(fav => fav.cca3 === cca3);
  }

  isCountryInFavorites(cca3: string): boolean {
    const favorites = this.getFavoritesFromStorage();
    return favorites.some(fav => fav.cca3 === cca3);
  }

  getCountryDetails(cca3: string): any {
    const favorites = this.getFavoritesFromStorage();
    const country = favorites.find(fav => fav.cca3 === cca3);
    return country ? { ...country } : null;
  }
}
