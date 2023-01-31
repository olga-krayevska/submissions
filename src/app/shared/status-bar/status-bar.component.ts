import { Component, Input } from '@angular/core';
import { StatusEnum } from '../../enums/enums';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent {
  @Input() status: StatusEnum.LowRisk | StatusEnum.Uncomplete | StatusEnum.Unasigned | StatusEnum.NeedsReview = StatusEnum.Unasigned;

  getColor(): string {
    switch (this.status) {
      case StatusEnum.LowRisk:
        return 'green';
      case StatusEnum.Uncomplete:
        return 'red';
      default:
        return 'grey';
    }
  }

}
