import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientEntity } from '../../entities/client.entity';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'cmreg-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass']
})
export class ClientFormComponent implements OnInit {

  public clientForm!: FormGroup;
  @Input() clientDNI!: number;
  client!: ClientEntity | undefined;
  clients: Array<ClientEntity> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientService: ClientService,
    private toastr: ToastrService
  ) {}
  
  ngOnInit(): void {
    // Obtengo todos los clientes, este array lo voy a utilizar para comprobar si el usuario a editar existe
    this.getAllClients();
    // Inicializamos el formulario con valores por defecto siempre
    this.clientFormInitialization();
    // Verificamos si recibimos un DNI de cliente, si ese es el caso buscamos el cliente y rellenamos el formulario con sus datos
    // Si el DNI no es de un cliente registrado mostramos un mensaje y redirigimos al Home
    this.checkIfItIsEdit();
  }
  
  getAllClients(): void {
    this.clients = this.clientService.clients;
  }

  clientFormInitialization(): void {
    this.clientForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(60), Validators.email]],
      documentNumber: [null, [Validators.required, Validators.max(99999999)]],
      birthday: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, [Validators.required, Validators.maxLength(40)]],
    })
  }

  checkIfItIsEdit(): void {
    if(this.clientDNI) {
      this.client = this.clients.find((c: ClientEntity) => c.documentNumber == this.clientDNI)
      if(this.client) {
        this.clientForm.setValue(this.client)
      } else {
        this.toastr.warning(`El cliente con DNI ${this.clientDNI} no existe`);
        this.router.navigate(['/home']);
      }
    }
  }

  onSubmit(form: FormGroup) {
      this.clientForm.markAllAsTouched();
      if(this.clientForm.valid) {
        // Según si recibimos un DNI o no llamamos a agregar cliente o modificar cliente
        if(this.clientDNI) {
            this.editClient();
        } else {
            this.addClient();
        }
        // Ya sea que se haya modificado o creado un nuevo cliente, se redirige al Home
        this.clientForm.reset();
        this.router.navigate(['/home'])
      }
  }

  addClient() {
    this.clientService.addClient(this.clientForm.value)
  }

  editClient() {
    this.clientService.editClient(this.clientDNI, this.clientForm.value)
  }

}
