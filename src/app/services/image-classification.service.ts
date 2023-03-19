import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpEvent, HttpEventType} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageClassificationService {

  constructor(private http:HttpClient) {}
  testApi(){
    return this.http.get('https://13.82.224.92:8000/test')
  }
  predictImages(image:any) {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<any>('https://13.82.224.92:8000/predict', formData) ;
  }
  segmentedImage(image:any){
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<any>('https://13.82.224.92:8000/segmentation', formData) ;

  }

}
