import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, forkJoin, switchMap } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchResults = new EventEmitter<Country[]>();
  searchQuery: string = '';
  uniqueCountryList: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  onSearchInputChanged() {
    const query = this.searchQuery.trim();
    console.info("query: ",query);

    if(query.length === 0){
      this.searchResults.emit([]);
    }

    if (query.length >= 3) {
      this.countriesService.getSearchByName(query)
      .subscribe((result: Country[]) => {
        if(result.length > 0) this.searchResults.emit(result);
      })
    }

    // if (query.length >= 3) {
    //   forkJoin([
    //     this.countriesService.getSearchByName(query),
    //     this.countriesService.getSearchByCode(query)
    //   ]).pipe(
    //     switchMap(([nameResults, codeResults]) => {
    //       // Handle the combination of nameResults and codeResults as needed
    //       const mergedResults = this.mergeResults(nameResults, codeResults);
    //       return mergedResults;
    //     })
    //   ).subscribe(results => {
    //     console.info(results)
    //     // this.searchResults.emit([results]);
    //   this.searchResults.emit(this.uniqueCountryList);
    //   });
    // } else {
    //   this.searchResults.emit([]);
    // }
  }

  mergeResults(nameResults: Country[], codeResults: Country[]): Country[] {
    // Handle merging of nameResults and codeResults based on your requirements
    const merged: Country[] = nameResults.concat(codeResults);

    const uniqueCountryCodeList = merged.map(item => item.ccn3)
    .filter((value, index, self) => self.indexOf(value) === index);

    uniqueCountryCodeList.forEach(code => {
      const country = merged.find(i => i.ccn3 === code);
      const found = this.uniqueCountryList.find(i => i.ccn3 === code);
      if(!found) this.uniqueCountryList.push(country as Country);
    })

    return this.uniqueCountryList;
  }

}
