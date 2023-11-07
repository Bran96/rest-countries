import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FavouritesService } from '../services/favourites.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-favourite-details',
  templateUrl: './favourite-details.component.html',
  styleUrls: ['./favourite-details.component.css']
})
export class FavouriteDetailsComponent {
  country: any;
  private favoritesSubscription!: Subscription;
  commentForm: FormGroup;
  languageArray: string[] = [];
  languageString: string = '';
  currencyKeys: string[] = [];
  langauges: string[] = [];
  currencies: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private favouritesService: FavouritesService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern('(https?|ftp)://[\\w/%.-]+')]]
    });
  }

  ngOnInit(): void {
    const cca3 = this.route.snapshot.paramMap.get('cca3');
    if (cca3 !== null) {
      this.favoritesSubscription = this.favouritesService.getFavorites().subscribe(favorites => {
        this.country = this.favouritesService.getCountryDetails(cca3);
      });
    }

    if(this.country.languages){
      this.languageArray = Object.values(this.country.languages);
      this.languageString = this.buildDisplayForArray(this.languageArray);
    }

    if(this.country.currencies) {
      this.currencyKeys = Object.keys(this.country.currencies);
    }
  }

  onImageUrlBlur(): void {
    const imageUrlControl = this.commentForm.get('imageUrl');
    if (imageUrlControl) {
      imageUrlControl.markAsTouched();
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    const comment = this.commentForm.value.comment;
    const imageUrl = this.commentForm.value.imageUrl;
    const cca3 = this.route.snapshot.paramMap.get('cca3');

    if (cca3 !== null) {
      this.favouritesService.addComment(cca3, comment, imageUrl);
      this.commentForm.reset();
      this.country = this.favouritesService.getCountryDetails(cca3);
    }
  }

  ngOnDestroy(): void {
    this.favoritesSubscription.unsubscribe();
  }

  buildDisplayForArray(array: string[]) {
    return array.join(', ')
  }
}
