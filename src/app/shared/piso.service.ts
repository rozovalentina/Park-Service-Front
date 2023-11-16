import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateOperationDTO } from '../dto/update-operation-dto';
import { Vehiculo } from '../model/vehiculo/vehiculo';
import { Piso } from '../model/piso/piso';


@Injectable({
  providedIn: 'root'
})
export class PisoService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  private url="http://localhost:8080/gestionParqueaderos/"
  constructor(private http: HttpClient) { }

  registrarVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(`${this.url}/registrarVehiculo`, vehiculo, this.httpOptions);
  }

  crearVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(`${this.url}/crearVehiculo`, vehiculo, this.httpOptions);
  }

  registrarSalida(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(`${this.url}/registrarSalida`, vehiculo, this.httpOptions);
  }
  
  findAll(): Observable<Piso[]>{
    return this.http.get<Piso[]>(`${this.url}/pisos`,this.httpOptions); 
  }

}
