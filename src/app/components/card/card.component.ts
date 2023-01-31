import { Component, Input } from '@angular/core';
import { StatusEnum } from '../../enums/enums';

export interface ICard {
  name: string;
  status: StatusEnum.LowRisk | StatusEnum.Uncomplete | StatusEnum.NeedsReview;
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
