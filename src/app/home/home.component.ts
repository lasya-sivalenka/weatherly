import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public weatherService: WeatherService,) { }

  ngOnInit(): void {
  }

  getWeather(value) {
    this.weatherService.getWeather(value.id);
  }

}
