import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as cities from './cities.json';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent implements OnInit {

  @Output() selectedCity = new EventEmitter();

  myControl = new FormControl();
  options: any  = (cities  as  any).default;
  filteredOptions: Observable<any[]>;
  showAutocomplete = false;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  updatedVal(val): void {
    if (val && val.length >= 3) {
      this.showAutocomplete = true;
   } else {
      this.showAutocomplete = false;
   }
  }


  displayProperty(value) {
    if (value) {
      return value.name + ', ' + value.country;
    }
  }

  onSelectCity(value) {
    this.selectedCity.emit(value);
  }

  private _filter(city) {
    let filterValue;
    if (typeof(city) === 'string') {
      filterValue = city.toLowerCase();
    }
   else {
      filterValue = city.name.toLowerCase();
    }
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
