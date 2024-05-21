import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path : 'home', component : DashboardComponent, title: "Home Page"},
    {path : 'view', component : ViewComponent, title: "View Page"} ,
    {path : 'about', component : AboutComponent, title : "About Page"}
];
