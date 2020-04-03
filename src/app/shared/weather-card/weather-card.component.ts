import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  cities;

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

}
