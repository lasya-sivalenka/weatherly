import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    HeaderComponent,
    WeatherCardComponent,
    TypeAheadComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    WeatherCardComponent,
    TypeAheadComponent,
    MapComponent
  ]
})
export class SharedModule { }
