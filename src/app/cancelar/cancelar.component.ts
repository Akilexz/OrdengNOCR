
import { OrdenGastos } from './../model/OrdenGasto';
import { OrdenGastoService } from './../services/OrdenGasto.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css'],
})
export class CancelarComponent implements OnInit {
  OrdenGastoService: any;
  ordenGasto: OrdenGastos;
  title = 'sweetAlert';


  date: Date;
  DatosEmpleado: any;
  constructor(
    private router: Router,
    private ordeGastoDataService: OrdenGastoService,

  ) {}

  ngOnInit() {
    this.ordenGasto = new OrdenGastos();
  }

  btnClickHome =  function () {
    const validacionRuc = $('#ruc').val();
    const validacionOrdG = $('#OrdG').val();
    const validacionhoraFech = $('#horaFech').val();
    const validacionOrden = $('#Orden').val();
    const validacionDescripcion = $('#Descripcion').val();
    const validacionCantidad = $('#Cantidad').val();
    const validacionPreUni = $('#PreUni').val();
    const validacionIva = $('#Iva').val();
    const validacionOtrImp = $('#OtrImp').val();


    // tslint:disable-next-line:curly
    // tslint:disable-next-line:no-unused-expression
    if ( validacionRuc === '' || validacionOrdG === '' || validacionhoraFech === '' || validacionOrden === '' ||
    // tslint:disable-next-line:max-line-length
    validacionDescripcion === '' || validacionCantidad === '' || validacionPreUni === '' || validacionIva === '' || validacionOtrImp === '' ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Faltan Campos por llenar!',
        footer: '<a href></a>'
      })
    } else {
      this.router.navigateByUrl('/proveedor')
    }
  };

  crearOActualizarOrdenGasto() {
    this.ordeGastoDataService.crearOActualizarOrdenGasto(this.ordenGasto)
    .subscribe(data =>  {
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
