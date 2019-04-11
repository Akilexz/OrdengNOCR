import { OrdenGastos } from './../model/OrdenGasto';
import { OrdenGastoService } from './../services/OrdenGasto.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProveedorService } from './../services/Proovedor.service';
import { Proveedor } from './../model/Proovedor';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
  OrdenGastoService: any;
  ordenGastos: OrdenGastos[];
  date: Date;
  title = 'sweetAlert';

  constructor(
    private router: Router,
    private http: HttpClient,
    private ordenGastosDataService: OrdenGastoService,
  ) { }

  ngOnInit() {
    this.buscarOrdenGasto();
  }
  buscarOrdenGasto() {
    this.ordenGastosDataService.buscarOrdenGasto().subscribe(respuesta => {
      this.ordenGastos = respuesta;
      console.log(this.ordenGastos);
    },
    () => {
      }
    );
    }
    Editar(ordenGastos: OrdenGastos): void {
      localStorage.removeItem('id_orden');
      localStorage.setItem('id_orden', ordenGastos.id_orden.toString());
      this.router.navigate(['editar']);
    }
    Borrar(ordenGastos: OrdenGastos) {
      if (ordenGastos === undefined) {return; }
      this.ordenGastosDataService.deleteOrdenGasto(ordenGastos)
      .subscribe( respuesta  =>{
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
