import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<any>{
    return this.http.get("http://127.0.0.1:5000/getUsers")
  }
}
