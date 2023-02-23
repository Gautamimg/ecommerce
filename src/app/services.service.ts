import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpInterceptor} from '@angular/common/http';
import {environment} from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  private valueChanged = new BehaviorSubject<any>(null);

  constructor(private http:HttpClient){}
 
  headers = { headers: new HttpHeaders().set('Authorization', 'Bearer '+this.get_token()) }
  get(url:any){
    return this.http.get(environment.post_url+url,this.headers);
  }
  post(url:any,data:any){
   return this.http.post(environment.post_url+url,data,this.headers);
  }
  get_token() {
    return JSON.parse(localStorage.getItem('token') || '{}');
  }

  PUT(url:any,data:any){
    return this.http.put('https://reqres.in/api'+url,data,this.headers);
   }
   get_api(){
   return  this.http.get('https://reqres.in/api/users?page=2',this.headers);
   }
   count(count_data:any){
    this.valueChanged.next(count_data);
   }
   get_valuechanged():Observable<any>{
    return this.valueChanged.asObservable();
   }
}
