import { Component, OnInit } from '@angular/core';
//import * as io from 'socket.io-client';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //socket: SocketIOClient.Socket;
  messages: Object[] = [];
  message = {user: '', value: ''};

  constructor(private chatservice: ChatService) {
    //this.socket = io('http://192.168.111.37:4000');

    //this.socket.on('message', (message) => {
    //  this.messages.push(message);
    //});
    this.chatservice.messages().subscribe(
      message => this.messages.push(message) 
    )
  }

  ngOnInit() {
  }

  send() {
    // Il faudrait pouvoir saisir un pseudo et un message et l'envoyer au serveur
    //this.socket.emit('message', {
    //  user: this.message.user,
    //  value: this.message.value
    //});
    this.chatservice.send({
      user: this.message.user,
      value: this.message.value
    })

    }
    
  }

