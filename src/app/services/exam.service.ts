import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../classes/patient';
import { Exam } from '../classes/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }
  public createExam(exam:Exam):Observable<any>{
    return this.http.post<Exam>("https://mybright-api.herokuapp.com/exam",exam);
  }
  public getExam():Observable<any>{
    return this.http.get("https://mybright-api.herokuapp.com/exam");

  }
}
