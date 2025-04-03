import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { ImpressumComponent } from './legalization/impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'impressum', component: ImpressumComponent}
];
