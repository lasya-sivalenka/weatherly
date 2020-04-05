import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, AfterViewInit, OnChanges  {

  @Input() coords: any;

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  map: google.maps.Map;
  // lat = 40.730610;
  // lng = -73.935242;

  constructor() { }
  ngOnChanges(): void {
    this.getCoordinates(this.coords);
    this.mapInitializer();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.mapInitializer();
    }, 0);
   }

  mapInitializer() {
    const mapOptions: google.maps.MapOptions = {
      center: this.getCoordinates(this.coords),
      zoom: 8,
    };
    const marker = new google.maps.Marker({
      position: this.getCoordinates(this.coords),
      map: this.map,
    });
    if (this.gmap) {
      this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
      marker.setMap(this.map);
    }
   }

   getCoordinates(coords) {
    return new google.maps.LatLng(coords.lat, coords.lon);
  }
}
