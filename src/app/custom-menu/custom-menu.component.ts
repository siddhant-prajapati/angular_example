import { Component, ContentChildren, QueryList } from '@angular/core';
import { CustomMenuItemComponent } from './custom-menu-item/custom-menu-item.component';
@Component({
  selector: 'custom-menu',
  standalone: true,
  imports: [],
  templateUrl: './custom-menu.component.svg',
  styles: ``
})
export class CustomMenuComponent {
  fillColor = 'rgb(255, 0, 0)';
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

}
