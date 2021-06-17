import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchComponent } from './components/match/match.component';

const routes: Routes = [
    { path: 'match/:id', component: MatchComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
