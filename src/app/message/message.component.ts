import { Component, OnInit } from "@angular/core";
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model';

@Component({
    selector: 'app-message',
    template: `
    <div [class]="'alert alert-' + message.type"
         *ngFor="let message of messages"
        >
        {{ message.value }}
        <button class="close" (click)="messageService.deleteMessage(message)">&times;</button>
    </div>
    `
})
export class MessageComponent implements OnInit {
    messages: Message[];

    constructor(public messageService: MessageService) {}

    ngOnInit(): void {
        this.messageService.getMessages().then(
            messages => this.messages = messages
        );
    }
}