import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersListComponent } from './pages/providers-list/providers-list.component';
import { ProviderDetailComponent } from './pages/provider-detail/provider-detail.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { ProviderBookingsComponent } from './pages/provider-bookings/provider-bookings.component';

const routes: Routes = [
  { path: 'providers', component: ProvidersListComponent },
  { path: 'providers/:id', component: ProviderDetailComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'manage', component: ProviderBookingsComponent },
  { path: '', redirectTo: 'providers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule {}
