import { Component } from '@angular/core';
import { DisplayService } from '../service/display.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  name: string = '';
  email: string ='';
  message: string = '';

  isSubmitted = false;  
  messages: Array<any> = []

  constructor(
    private service : DisplayService    

  ){
    this.messages = this.service.getAllMessages()
    this.isSubmitted = this.messages.length > 0
  }

  onSubmit():void {
    this.isSubmitted = true
    this.service.insert({
      'name':this.name,
      'email': this.email,
      'message': this.message
    })

    console.log(this.messages)  
    
  }

  deleteMessage(index: number):void {
    this.service.deleteMessage(index)
  }

}
