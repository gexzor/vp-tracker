import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChartComponent } from './components/chart/chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { MatchComponent } from './components/match/match.component';
import { MaterialModule } from './material-module';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
@NgModule({
    declarations: [
        AppComponent,
        MatchComponent,
        MatchDetailsComponent,
        ButtonsComponent,
        DashboardComponent,
        ChartComponent,
        HeroHeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
