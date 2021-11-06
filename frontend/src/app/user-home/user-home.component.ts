import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  available_topics: any = [
    'IPhoneProducts', 
    'MacBookProducts', 
    'MysteryBooks', 
    'RomanticNovels', 
    'Moisturizers', 
    'Shampoos' 
  ]
  broker1_result : any = {};
  broker2_result : any = {};
  broker3_result : any = {};
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
    this._user.subscribeToTopic(topic).subscribe(() =>{
      this.poll();
    });
  }

  unsubscribeToTopic(topic){
    console.log("topic to un", topic)
    this._user.unsubscribeToTopic(topic).subscribe(() =>{
      this.poll();
    });
  }

  getSubscriptions(){
    this._user.getSubscriptions().subscribe(res  =>{
      this.broker1_result = res;
      console.log(this.broker1_result);
    });
  }

  getSubscriptions_broker2(){
    this._user.getSubscriptions_broker2().subscribe(res  =>{
      this.broker2_result = res;
      console.log(this.broker2_result);
    });
  }

  getSubscriptions_broker3(){
    this._user.getSubscriptions_broker3().subscribe(res  =>{
      this.broker3_result = res;
      console.log(this.broker3_result);
    });
  }

  addName(data){
    this.username = data;
  }
  ngOnInit() {
    this.poll();
    setInterval(()=> { this.poll(), console.log('polling') },1000);
  }
  poll(){
    this.getSubscriptions();
    this.getSubscriptions_broker2();
    this.getSubscriptions_broker3();
  }
  logout(){
    this._user.logout()
    // .subscribe(
    //   data=>{console.log(data);this._router.navigate(['/login'])},
    //   error=>console.error(error)
    // )
  }


}
