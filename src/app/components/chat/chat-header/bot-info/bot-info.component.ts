import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-bot-info',
  templateUrl: './bot-info.component.html',
  styleUrls: ['./bot-info.component.scss']
})
export class BotInfoComponent implements OnInit {

  invert = false;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.switchTheme.subscribe((status) => {
      if (status === true) {
        this.invert = !this.invert;
      }
    });
  }

}
