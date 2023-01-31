import { Component } from '@angular/core';
import { links } from './header.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links = links;

  constructor(private router: Router,) {
  }

  isActive(link: string): boolean {
    return this.router.url.includes('/' + link);
  }
}
