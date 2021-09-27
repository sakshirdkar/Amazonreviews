import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messageForm: FormGroup;
  messages : any;
  constructor(private fb : FormBuilder, private messageService : MessageService) { }

  ngOnInit(): void {
    this.initialize();
    this.getMessages();
  }

  initialize(){
    this.messageForm = this.fb.group({
      content : ['',Validators.required]
    });
  }

  sendMessage(){
    this.messageService.sendMessage(this.messageForm.value).subscribe();
    window.location.reload();
  }

  getMessages(){
    this.messageService.getMessages().subscribe(res => this.messages = res);
  }

}
