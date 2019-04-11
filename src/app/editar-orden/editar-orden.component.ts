import { OrdenGastos } from './../model/OrdenGasto';
import { OrdenGastoService } from './../services/OrdenGasto.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.component.html',
  styleUrls: ['./editar-orden.component.scss']
})
export class EditarOrdenComponent implements OnInit {
  ordenGastos: OrdenGastos = new OrdenGastos();
  tittle = 'sweetAlert';

  constructor(private router:Router,
    private  ordenGastoDataService: OrdenGastoService) { }
  ngOnInit() {
    this.Editar();
  }
  Editar() {
    let id_orden = localStorage.getItem('id_orden');
    this.ordenGastoDataService.getOrdenGastoid(+id_orden)
    .subscribe(data => {
      console.log (data);
    });
  }
  Actualizar(ordenGastos: OrdenGastos): void {
    this.ordenGastoDataService.crearOActualizarOrdenGasto(ordenGastos)
    .subscribe(data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Se borró con éxito'
      });
    })
  }

}
