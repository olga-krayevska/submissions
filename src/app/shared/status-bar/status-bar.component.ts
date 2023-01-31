import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent {
  @Input() status: 'low' | 'uncomplete' | 'unassigned' | 'review' = 'unassigned';

  getColor(): string {
    switch (this.status) {
      case 'low':
        return 'green';
      case 'uncomplete':
        return 'red';
      default:
        return 'grey';
    }
  }

  getStatusText(): string {
    switch (this.status) {
      case 'low':
        return 'Low Risk';
      case 'uncomplete':
        return 'Uncomplete';
      case 'review':
        return 'Needs Review';
      default:
        return 'Unassigned';
    }
  }
}
