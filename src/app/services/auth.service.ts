import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getToken() {
    const url = `https://login.microsoftonline.com/${environment.azure.tenantId}/oauth2/v2.0/token`;

    const requestBody = new URLSearchParams({
      'grant_type': 'client_credentials',
      'client_id': environment.azure.clientId,
     // 'client_secret': environment.azure.clientSecret,
      'scope': 'https://management.azure.com/.default'
    }).toString();

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(url, requestBody, { headers });
  }
}
