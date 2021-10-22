import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  topic : String=''
  username:String='';
  constructor(private _user:UserService, private _router:Router) { 
    this._user.user()
    .subscribe(
      data=>{
        console.log(data)
        this.addName(data)
      },
      error=>this._router.navigate(['/login'])
    )
  }

  addName(data){
    this.username = data.username;
  }
  ngOnInit() {
  }

  logout(){
    this._user.logout()
    // .subscribe(
    //   data=>{console.log(data);this._router.navigate(['/login'])},
    //   error=>console.error(error)
    // )
  }

  subscribeToTopic(){
    
  }

}
