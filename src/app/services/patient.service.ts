import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../classes/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  public  createPatient(patient:Patient):Observable<any>{
    return this.http.post<Patient>("https://mybright-api.herokuapp.com/patient",patient);
  }
  public getPatient(id:number):Observable<any>{
    return this.http.get("https://mybright-api.herokuapp.com/patient/"+id);

  }

}
