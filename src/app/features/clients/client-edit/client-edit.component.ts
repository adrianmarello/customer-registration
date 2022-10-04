import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'cmreg-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.sass']
})
export class ClientEditComponent implements OnInit {

  public clientDNI!: number;

  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // Recupero el parametro "dni" para enviarlo como Input para el componente cmreg-client-form
    // Si el dni no es un número válido muestro un mensaje y redirijo al Home
    this.route.params.subscribe(params => {
        if (Number(params['dni'])) {
            this.clientDNI = Number(params['dni'])
        } else {
            this.toastr.error('No es un DNI válido')
            this.router.navigate(['/home'])
        }
    })
  }

}
