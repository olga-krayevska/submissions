import { Component } from '@angular/core';
import { ICard } from '../card/card.component';
import * as moment from 'moment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  month = moment.months()

  cards: ICard[] = [
    {
      name: 'Work Flow: Requires Location',
      status: 'low',
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: `${new Date().getDay()} ${this.month[new Date().getMonth()]}` },
    {
      name: 'Work Flow: Requires Location',
      status: 'uncomplete',
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: `${new Date().getDay()} ${this.month[new Date().getMonth()]}` },
    {
      name: 'Work Flow: Requires Location',
      status: 'review',
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: `${new Date().getDay()} ${this.month[new Date().getMonth()]}` },
    {
      name: 'Work Flow: Requires Location',
      status: 'uncomplete',
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: `${new Date().getDay()} ${this.month[new Date().getMonth()]}` },
    { 
      name: 'Work Flow: Requires Location',
      status: 'low',
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: `${new Date().getDay()} ${this.month[new Date().getMonth()]}` },
  ]
  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
