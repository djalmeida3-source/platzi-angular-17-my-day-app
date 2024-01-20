import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';
import { MementoMoriCalendarComponent } from './pages/memento-mori-calendar/memento-mori-calendar.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'labs', 
    component: LabsComponent 
  },
  { 
    path: 'calendar', 
    component: MementoMoriCalendarComponent 
  },
];
