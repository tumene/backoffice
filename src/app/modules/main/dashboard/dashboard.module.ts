import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { RouterModule } from '@angular/router';
import { MatStyleModule } from 'src/app/mat-style.module';
import { DatatableModule } from 'src/app/shared/components/datatable/datatable.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatStyleModule,
    DatatableModule,
    SharedComponentsModule
  ],
  exports: [RouterModule]
})
export class DashboardModule {}
