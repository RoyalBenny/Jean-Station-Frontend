import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://localhost:5004/api/user";
  user: User = new User('', '', '', '', 0, '');
  subject: BehaviorSubject<User> = new BehaviorSubject(this.user);
  constructor(private httpClient: HttpClient) {
   }
     
   getUser(user:User): Promise<User> {
      //    this.httpClient.post<User>(this.url, user).subscribe(
      //   (data)=>{
      //     this.user = data;
      //     this.subject.next(this.user);
      //   },
      //   (error)=>{
      //     console.log(error);
      //   }
      // ).add(()=>{
      //  return  this.subject ;
      // });
      return this.httpClient.post<User>(this.url, user).toPromise();
   }



    addUser(user:User): Observable<User> {
      user.role = parseInt(user.role.toString());
      return this.httpClient.post<User>(this.url+'/register', user);
    }

    checkUser(user:User): Observable<boolean> {
      return this.httpClient.get<boolean>(this.url+'/'+user.email);
    }

}
