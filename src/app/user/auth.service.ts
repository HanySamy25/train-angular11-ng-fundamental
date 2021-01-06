import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:IUser
  constructor() { }

login(username:string,password:string){

  this.currentUser={
    id:1,
    userName:username,
    firstName:'H',
    lastName:'S'
  }
}

isAuthenticated(){
  return !!this.currentUser
}

updateCurrentUser(firstName:string,lastName:string){
  this.currentUser.firstName = firstName
  this.currentUser.lastName = lastName
}

}
