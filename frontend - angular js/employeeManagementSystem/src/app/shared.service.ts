import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getApi(endpoint: string) {
    let url = environment.requestPrefix + endpoint;
    return this.http.get(url);
  }

  postApi(endpoint:string, requestBody: any){
    let url = environment.requestPrefix + endpoint;
    return this.http.post(url, requestBody);
  }

  patchApi(endpoint:string, requestBody: any){
      let url = environment.requestPrefix + endpoint;
      return this.http.patch(url, requestBody);
  }

  deleteApi(endpoint:string){
      let url = environment.requestPrefix + endpoint;
      return this.http.delete(url);
  }
}
