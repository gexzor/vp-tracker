import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VpTrackerComponent } from './components/vp-tracker/vp-tracker.component';

const routes: Routes = [
  // { path: 'match/:id', component: MatchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vptracker', component: VpTrackerComponent },
  { path: '**', component: VpTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
