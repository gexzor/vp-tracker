import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
  ],
})
export class MaterialModule {}
