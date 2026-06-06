import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [SharedModule, AdminRoutingModule]
})
export class AdminModule {}
