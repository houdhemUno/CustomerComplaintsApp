import { Routes } from '@angular/router';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ReclamationsComponent } from '../components/reclamations/reclamations.component';
import { ReclamationDetailsComponent } from '../components/reclamation-details/reclamation-details.component';
import { ReclamationFormComponent } from '../components/reclamation-form/reclamation-form.component';
import { LoginComponent } from '../components/login/login.component';
import { HistoriqueComponent } from '../components/historique/historique.component';
import { RapportsComponent } from '../components/rapports/rapports.component';
import { UsersComponent } from '../components/users/users.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LandingComponent } from '../components/landing/landing.component';
// import { SignInFormComponent } from '../components/sign-in-form/sign-in-form.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
// import { SignUpFormComponent } from '../components/sign-up-form/sign-up-form.component';

export const routes: Routes = [    
{path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'home', component: LandingComponent },
{path: 'reclamations', component: ReclamationsComponent },
{path: 'reclamation/:id', component: ReclamationDetailsComponent },
{path: 'creer-reclamation', component: ReclamationFormComponent },
{path: 'modifier-reclamation/:id', component: ReclamationFormComponent },
{path: 'login', component: LoginComponent },
{path: 'historique', component: HistoriqueComponent },
{path: 'rapports', component: RapportsComponent },
{path: 'users', component: UsersComponent },
{path: 'user/:id', component: UserDetailsComponent },
{path: 'creer-user', component: UserFormComponent },    
{path: 'modifier-user/:id', component: UserFormComponent }, 
{path: 'notifications', component: NotificationsComponent },
{path: 'about-us', component: AboutUsComponent },
{path: '**', redirectTo: '/home', pathMatch: 'full' },
];
