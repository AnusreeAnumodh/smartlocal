import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BookingRoutingModule } from './booking-routing.module';
import { ProvidersListComponent } from './pages/providers-list/providers-list.component';
import { ProviderDetailComponent } from './pages/provider-detail/provider-detail.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { ProviderBookingsComponent } from './pages/provider-bookings/provider-bookings.component';

@NgModule({
  declarations: [
    ProvidersListComponent,
    ProviderDetailComponent,
    MyBookingsComponent,
    ProviderBookingsComponent
  ],
  imports: [SharedModule, FormsModule, BookingRoutingModule]
})
export class BookingModule {}
