import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientEntity } from '../../entities/client.entity';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'cmreg-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.sass']
})
export class ClientTableComponent implements OnInit {

  clients: Array<ClientEntity> = [];
  clientsChangeSubscription: Subscription;

  constructor(private clientService: ClientService) {
      this.clientsChangeSubscription = this.clientService.clientsChange.subscribe(() => this.clients = this.clientService.clients)
  }

  ngOnInit(): void {
      this.clientService.getClients()
  }

  ngOnDestroy(): void {
      this.clientsChangeSubscription.unsubscribe();
  }

  removeClient(client: ClientEntity): void {
      this.clientService.removeClient(client)
  }

}
