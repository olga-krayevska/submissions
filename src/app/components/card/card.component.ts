import { Component, Input } from '@angular/core';

export interface ICard {
  name: string;
  status: 'low' | 'uncomplete' | 'review';
  from: string;
  to: string;
  date: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: ICard;

}
