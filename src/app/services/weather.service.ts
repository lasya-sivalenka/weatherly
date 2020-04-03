import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const key = environment.apiKey;
const weatherapi = environment.apiUrl + '/weather?id=';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  weatherObservable: Observable<any>;
  mapCoords: any;

  constructor(private http: HttpClient) { }

  public getWeather(id) {
    this.http.get(weatherapi + id + `&appid=${key}`).subscribe(data => {
       this.weatherObservable = new Observable((observer) => {
        if (data) {
          observer.next(data);
          this.mapCoords = data['coord'];
        }
        else {
          observer.error('No data found');
        }
      });
    });
  }


}
