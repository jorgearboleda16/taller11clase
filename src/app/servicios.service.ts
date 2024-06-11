import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private servicios = [
    { nombre: 'Desarrollo Web', descripcion: 'Creación de sitios web responsivos y funcionales', precio: 1500 },
    { nombre: 'Consultoría IT', descripcion: 'Asesoramiento en infraestructura tecnológica', precio: 2000 },
    { nombre: 'Soporte Técnico', descripcion: 'Servicios de soporte y mantenimiento', precio: 1000 }
  ];

  constructor() { }

  obtenerServicios(): Observable<any[]> {
    return of(this.servicios);
  }
}
