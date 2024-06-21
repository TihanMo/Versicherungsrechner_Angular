import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { VersicherungsplanComponent } from './versicherungsplan/versicherungsplan.component';
import { VersicherungsrechnerComponent } from './versicherungsrechner/versicherungsrechner.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'versicherungsplan', component: VersicherungsplanComponent },
  { path: 'versicherungsrechner', component: VersicherungsrechnerComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'sign-in', component: SignInComponent },
];
