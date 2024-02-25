import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabGroupComponent } from './tab-group/tab-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'repit';
}
