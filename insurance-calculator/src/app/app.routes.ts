import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InsuranceFormComponent } from './insurance-form/insurance-form.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'calculate', component: InsuranceFormComponent },
];