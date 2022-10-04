import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsComponent } from './clients.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientFormComponent } from './shared/components/client-form/client-form.component';
import { ClientTableComponent } from './shared/components/client-table/client-table.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientListComponent,
    ClientEditComponent,
    ClientFormComponent,
    ClientTableComponent,
    ClientRegistrationComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
