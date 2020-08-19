import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { resizeWidthTrigger } from './chat-info-animation';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.scss'],
  animations: [resizeWidthTrigger]
})

export class ChatInfoComponent implements OnInit {

  invert = false;
  visibility = 'visible';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.switchTheme.subscribe(status => {
      if (status === true) {
        this.invert = !this.invert;
      }
    });
  }

}
