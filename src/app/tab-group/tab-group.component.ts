import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, RouterModule],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss',
})
export class TabGroupComponent {
  links = [
    { label: 'Start', url: 'start' },
    { label: 'Workout', url: 'workout' },
    { label: 'Finish', url: 'finish' },
  ];

  activeLink = this.links[0];
}
