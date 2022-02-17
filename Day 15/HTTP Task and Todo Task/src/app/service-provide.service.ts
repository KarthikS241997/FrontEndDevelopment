import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvideService {

  constructor(private http: HttpClient) { }
  getComments(){
    console.log("getcomments");
    // return this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>console.log(data)
    return this.http.get("https://jsonplaceholder.typicode.com/users");

  }
  // getData(){
  //   console.log(this.http.get("https://jsonplaceholder.typicode.com/comments"));
    
  // }
}
