import { Component, OnInit } from '@angular/core';
import {
  recentMessages,
  animatedRecentMessagesList,
  animatedRecentMessagesItems,
} from '../chat-body-animations';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-list-recent-messages',
  templateUrl: './list-recent-messages.component.html',
  styleUrls: ['./list-recent-messages.component.scss'],
  animations: [recentMessages, animatedRecentMessagesList, animatedRecentMessagesItems],
})
export class ListRecentMessagesComponent implements OnInit {
  visible = 'none';
  invert = false;
  recentMessage: Array<[]>;
  getRecentMsg: Array<[]> = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.viewRecentMessage.subscribe((status) => {
      if (status === true) {
        this.visible = 'visible';
      }
      if (status === false) {
        this.visible = 'none';
      }
    });
    this.chatService.switchTheme.subscribe((status) => {
      if (status === true) {
        this.invert = !this.invert;
      }
    });
    this.recentMessage = this.chatService.recentMessages;
  }

  onClickRecentMessage(index) {
    this.getRecentMsg = this.recentMessage[index];
    this.chatService.recentMessagesEvent.next(this.getRecentMsg);
  }

  removeItem(index) {
    this.recentMessage.splice(index, 1);
  }
}
