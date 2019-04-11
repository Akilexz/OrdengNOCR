import { Router } from '@angular/router';
import { OrdenGastos } from './../model/OrdenGasto';
import { Component, OnInit } from '@angular/core';
import { OrdenGastoService } from '../services/OrdenGasto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  OrdenGastoService: any;
  ordenGastos: OrdenGastos[];

  date: Date;
  constructor(
    private ordenGastoDataService: OrdenGastoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscarOrdenGasto();
  }
  buscarOrdenGasto() {
    this.ordenGastoDataService.buscarOrdenGasto().subscribe(respuesta => {
      this.ordenGastos = respuesta;
      console.log(this.ordenGastos);
    },
    () => {
      }
    );
  }
  Borrar(ordenGastos: OrdenGastos) {
    if (ordenGastos === undefined) {return; }
    this.ordenGastoDataService.deleteOrdenGasto(ordenGastos)
    .subscribe( respuesta  => {
      this.ordenGastos = respuesta;
      console.log (respuesta)
        alert('borrado');
      });
  }
  Editar(ordenGastos: OrdenGastos): void {
    localStorage.removeItem('id_orden');
    localStorage.setItem('id_orden', ordenGastos.id_orden.toString());
    this.router.navigate(['editar']);
  }

}
