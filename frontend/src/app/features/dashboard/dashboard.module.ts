import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [SharedModule, FormsModule, DashboardRoutingModule]
})
export class DashboardModule {}
