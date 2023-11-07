import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() countries: Observable<Country[]> | undefined;
  @Output() regionSelected = new EventEmitter<string>();
  regions: string[] = [];
  @Input() namesFromParent: any[] | null = null;
  allCountries: any[] = [];

  ngOnInit(): void {
    if (this.countries) {
      this.countries.subscribe(data => {
        this.extractUniqueRegions(data);
      });
    }
  }

  extractUniqueRegions(countries: Country[]) {
    const uniqueRegionsSet = new Set(countries.map(country => country.region));
    this.regions = Array.from(uniqueRegionsSet);
  }

  onRegionChange(event: Event) {
    const region = (event.target as HTMLSelectElement).value;
    this.regionSelected.emit(region);
  }
}
