import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  _baseUrl:string='http://localhost:3000/User'
  constructor(private http:HttpClient){
  }

  getUserData(){
    return this.http.get<User[]>(this._baseUrl);
  }

  createUser(userObj:User){
    return this.http.post<User>(this._baseUrl,userObj)
  }

  updateCrudUser(id:any,userObj:User){
    debugger
    return this.http.put<User>(`${this._baseUrl}/${id}`,userObj);
  }

  getUserByid(id:any){
    return this.http.get<User>(`${this._baseUrl}/${id}`);
  }

  deleteById(id:any){
    return this.http.delete<User>(`${this._baseUrl}/${id}`);
  }

  
}
