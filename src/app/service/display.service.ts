import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  messages: Array<any> = []


  constructor() {
    this.init()
   }

  init(): void{
    this.insert({
      name: "idowu Bolaji",
      email: "bolaji@gmail.com",
      message: "Hellow World"
    });
    this.insert({
      name: "idowu Bolaji",
      email: "bolaji@gmail.com",
      message: "Hellow World"
    });
    this.insert({
      name: "idowu Bolaji",
      email: "bolaji@gmail.com",
      message: "Hellow World"
    });
  }

  insert(message: {name:string, email: string, message: string }): void{
    this.messages.push(message)

  }

  getAllMessages(): any[]{
     return this.messages
  }

  deleteMessage(index: number): void{
     this.messages.splice(index, 1)
  }
  
}
