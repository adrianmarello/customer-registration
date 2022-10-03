import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientFormComponent } from './shared/components/client-form/client-form.component';
import { ClientTableComponent } from './shared/components/client-table/client-table.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientDetailComponent,
    ClientListComponent,
    ClientEditComponent,
    ClientFormComponent,
    ClientTableComponent,
    ClientRegistrationComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
