import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries-component/countries/countries.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouriteDetailsComponent } from './favourite-details/favourite-details.component';

const routes: Routes = [
  {
    path: '', component: CountriesComponent
  },
  {
    path: 'favourites', component: FavouritesComponent
  },
  { 
    path: 'favourites/:cca3', component: FavouriteDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }