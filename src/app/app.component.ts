import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const animation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ transform: 'translateX(-100%)' })),
  ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animation],
})
export class AppComponent {
  title = 'FlexLayout';
  menuOpened = false;

  onMenuToggle() {
    this.menuOpened = !this.menuOpened;
  }
}
