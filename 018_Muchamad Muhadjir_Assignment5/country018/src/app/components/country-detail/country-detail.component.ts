import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Country } from '../../country.model';
import { CountryService } from '../../country.service';

@Component({
    selector: 'app-country-detail',
    templateUrl: './country-detail.component.html',
    styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
    country: Country = {} as Country;
    // x: any = ' '

    constructor(
        private route: ActivatedRoute,
        private countryService: CountryService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getCountry();
    }

    getCountry(): void {
        // this.x = this.route.snapshot.paramMap.get('name');
        const name:any = this.route.snapshot.paramMap.get('name');
        this.country = this.countryService.getCountry(name);
    }

    goBack(): void {
        this.location.back();
    }
}