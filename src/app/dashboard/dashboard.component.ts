import { Component, Directive, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { CustomMenuComponent } from '../custom-menu/custom-menu.component';
import { CustomMenuItemComponent } from '../custom-menu/custom-menu-item/custom-menu-item.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent, 
    RouterLink, 
    CustomMenuComponent, 
    CustomMenuItemComponent,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    console.log('dashboard is implementent')
  }

  
}
