import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Observable, of } from 'rxjs';
import { Country } from '../../models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries$: Observable<Country[]> | undefined;
  selectedRegion!: string;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countries$ = this.countriesService.getCountries();
  }

  onRegionSelected(region: string) {
    this.getCountries();
    this.selectedRegion = region;

    if(region === "All") {
      this.getCountries();
    } else {
      this.countriesService.getFilterByRegion(region).subscribe(filteredCountries => {
        this.countries$ = of(filteredCountries);
      });
    }
  }

  onSearchResultsReceived(results: Country[]) {
    if(results.length == 0) {
      this.getCountries();
    } else {
      this.countries$ = of(results);
    }
  }
}
