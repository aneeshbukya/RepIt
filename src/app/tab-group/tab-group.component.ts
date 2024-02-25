import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, RouterModule, MatIconModule],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss',
})
export class TabGroupComponent {
  links = [
    { label: 'Start', url: '/start', icon: 'power_settings_new' },
    { label: 'Workout', url: '/workout', icon: 'fitness_center' },
    { label: 'Finish', url: '/finish', icon: 'sports_score' },
  ];

  activeLink = this.links[0];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const link = this.links.find(link => link.url == event.url);

        if (link) {
          this.activeLink = link;
        }
      }
    })
  };
}
