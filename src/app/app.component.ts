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

export const minimalAnimation = trigger('minimal', [
  state(
    'open',
    style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow',
    })
  ),
  state(
    'closed',
    style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green',
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('0.5s')]),
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
