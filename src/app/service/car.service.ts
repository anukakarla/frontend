import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  

  getData(){
    return this.http.get("http://localhost:8080/getallcars");
  }
  deleteCarDetails(id:any){
    return this.http.delete(`http://localhost:8080/deletecar/${id}`)
  }
  addDetails(data:any){

    return  this.http.post("http://localhost:8080/addcar",data)

  }

  authenticate(data:any){
    return this.http.post("http://localhost:8080/login",data);
  }
  


  constructor(private http:HttpClient) { }
}
