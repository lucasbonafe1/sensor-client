import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TableAlertsComponent } from './pages/alerts/table-alerts/table-alerts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'alerts', component: TableAlertsComponent },
];
