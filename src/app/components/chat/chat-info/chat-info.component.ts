import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.scss'],
})

export class ChatInfoComponent implements OnInit {

  invert = false;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.switchTheme.subscribe(status => {
      if (status) {
        this.invert = !this.invert;
      }
    });
  }

}
