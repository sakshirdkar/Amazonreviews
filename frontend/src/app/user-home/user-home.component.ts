import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  result : any = {};
  topic : String=''
  username:String='';
  constructor(private _user:UserService, private _router:Router) { 
    this._user.user()
    .subscribe(
      data=>{
        this.addName(data)
      },
      error=>this._router.navigate(['/login'])
    )
  }
  subscribeToTopic(topic){
    this._user.subscribeToTopic(topic).subscribe();
    this.getSubscriptions();
  }

  getSubscriptions(){
    this._user.getSubscriptions().subscribe(res  =>{
      this.result = res;
    });
  }

  addName(data){
    this.username = data;
  }
  ngOnInit() {
    this.getSubscriptions();
    setInterval(()=> { this.poll(), console.log('polling') },10000);
  }
  poll(){
    this.getSubscriptions();
  }
  logout(){
    this._user.logout()
    // .subscribe(
    //   data=>{console.log(data);this._router.navigate(['/login'])},
    //   error=>console.error(error)
    // )
  }


}
