import { EventEmitter, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { TitleCasePipe } from '@angular/common';
import { ClientEntity } from '../entities/client.entity';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    
    private _clients: Array<ClientEntity> = [];
    public clientsChange: EventEmitter<any> = new EventEmitter();

    constructor(
        private localStorageService: LocalStorageService, 
        private toastr: ToastrService,
        private titlecasePipe: TitleCasePipe
    ) {
        this.getClients()
    }

    public get clients() {
        return this._clients
    }

    getClients(): void {
        this._clients = this.localStorageService.get('clients') || [];
        this.clientsChange.emit(true)
    }

    removeClient(values: ClientEntity): void {
        this.localStorageService.set('clients', this._clients.filter((c: ClientEntity) => c.documentNumber != values.documentNumber))
        this.toastr.error(`
            Cliente "${this.titlecasePipe.transform(values.firstName)} ${this.titlecasePipe.transform(values.lastName)}" 
            eliminado con éxito!
        `)
        this.getClients()
    }

    addClient(values: ClientEntity) {
        this._clients.push(values)
        this.localStorageService.set('clients', this._clients)
        this.toastr.success(`
            Cliente "${this.titlecasePipe.transform(values.firstName)} ${this.titlecasePipe.transform(values.lastName)}" 
            agregado con éxito!
        `)
        this.getClients()
    }

    editClient(dni: number, values: ClientEntity) {
        let clientIndex = this._clients.findIndex((c: ClientEntity) => c.documentNumber == dni)
        this._clients[clientIndex] = values;
        this.localStorageService.set('clients', this._clients);
        this.toastr.success(`
            Cliente "${this.titlecasePipe.transform(values.firstName)} ${this.titlecasePipe.transform(values.lastName)}"
            modificado con éxito
        `)
        this.getClients()
    }

}

