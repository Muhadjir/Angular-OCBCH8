import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { COUNTRIES } from './country-data';

@Injectable()
export class CountryService {

  constructor() { }
  getCountries(): Country[] {
    return COUNTRIES;
  }

  getPopulatedCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.population - a.population).slice(0, 5);
  }

  getLargestCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.area - a.area).slice(0, 5);
  }

  getGDPCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.gdp - a.gdp).slice(0, 5);
  }

  getCountry(name: string | void): Country | any{
    return COUNTRIES.find(country => country.name === name);
  }
}
