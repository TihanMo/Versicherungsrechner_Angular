import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InsuranceFormComponent } from './insurance-form/insurance-form.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { InsuranceTypeComponent } from './insurance-type/insurance-type.component';
import { InsuranceSummaryComponent } from './insurance-summary/insurance-summary.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'calculate', component: InsuranceFormComponent },
  { path: 'versicherungsrechner', component: InsuranceFormComponent },
  { path: 'versicherungsplan', component: InsuranceTypeComponent },
  { path: 'abschluss', component: InsuranceSummaryComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'registrieren', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'anmelden', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];
