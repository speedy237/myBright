import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  private subscriptionId = 'bfe170f0-6d0e-41f3-afb5-d9a9aea9a7d5';
  private resourceGroupName = 'bright-inference_group';
  private vmName = 'bright-inference';
  private apiUrl = `https://management.azure.com/subscriptions/${this.subscriptionId}/resourceGroups/${this.resourceGroupName}/providers/Microsoft.Compute/virtualMachines/${this.vmName}/start?api-version=2022-02-01`;

  constructor(private http: HttpClient) { }
  startVm(token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.apiUrl, {}, { headers });
  }
}
