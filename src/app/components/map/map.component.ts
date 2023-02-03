import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../card/card.component';
import * as moment from 'moment';
import { FormGroup } from '@angular/forms';
import { IForm } from '../table/table.constants';
import { StatusEnum } from '../../core/enums/enums';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  @Input() formGroup!: FormGroup;

  month = moment.months()

  cards: ICard[] = [];

  cardList: ICard[] = [
    {
      name: 'Work Flow: Requires Location',
      status: StatusEnum.LowRisk,
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: '2023-02-01T00:00:00.000Z'
    },
    {
      name: 'Work Flow: Requires Location',
      status: StatusEnum.Uncomplete,
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: '2023-02-01T00:00:00.000Z'
    },
    {
      name: 'Work Flow: Requires Location',
      status: StatusEnum.NeedsReview,
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: '2023-02-01T00:00:00.000Z'
    },
    {
      name: 'Work Flow: Requires Location',
      status: StatusEnum.Uncomplete,
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: '2023-02-01T00:00:00.000Z'
    },
    {
      name: 'Work Flow: Requires Location',
      status: StatusEnum.LowRisk,
      from: '123@qwe.com',
      to: '321@ewq.com',
      date: '2023-02-01T00:00:00.000Z'
    },
  ]
  display!:  google.maps.LatLngLiteral;

  height = '60vh';
  width = '65vw';

  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };
  zoom = 4;

  imageUrl = '/assets/icons/marker.svg';
  imageBounds: google.maps.LatLngBoundsLiteral[] = [
    { east: 0.01, north: 0.01, south: -1, west: -1 },
    { east: 5, north: 5, south: 3, west: 3 },
  ];

  ngOnInit(): void {
    this.cards = this.cardList;
    this.formGroup.valueChanges.subscribe((value: IForm) => this.filterCards(value))
  }

  filterCards(form: IForm): void {
    this.cards = this.cardList;
    if (form.search) {
      this.cards =  this.cards.filter(item => item.name.indexOf(form.search) !== -1);
    }
    if (form.status) {
       this.cards =  this.cards.filter(item => item.status === form.status);
    }
    if (form.from) {
       this.cards =  this.cards.filter(item => item.from === form.from);
    }
    if (form.date) {
       this.cards =  this.cards.filter(item => item.date.split('T')[0] === moment(form.date).format('YYYY-MM-DD'));
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  mapLayers(): void {
    console.log('map layers');
  }

  mapClose(): void {
    console.log('map close');
  }
}
