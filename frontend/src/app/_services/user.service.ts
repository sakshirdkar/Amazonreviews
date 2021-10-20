import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient, private router: Router) { }

  private currentUserSource = new ReplaySubject<any>(1);
  currentUser$ = this.currentUserSource.asObservable();

  register(body:any){
    return this.http.post(this.baseUrl + '/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any){
    console.log(body);
    return this.http.post(this.baseUrl + '/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }).pipe(
      map((response : any)=>{
        const user = response;
        if(user){
          this.setCurrentUser(user);
        }
      })
    );
  }

  user(){
    return this.http.get(this.baseUrl + '/users/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  logout(){
    // return this.http.get('http://127.0.0.1:3000/users/logout',{
    //   observe:'body',
    //   withCredentials:true,
    //   headers:new HttpHeaders().append('Content-Type','application/json')
    // }).pipe(map(()=>this.router.navigate(['/login'])))

    this.router.navigate(['/login'])
  }

  setCurrentUser(user : any){
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
    console.log("user local ", user)
  }
}
