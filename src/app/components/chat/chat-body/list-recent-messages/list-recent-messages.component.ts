import { Component, OnInit } from '@angular/core';
import { recentMessages, animatedBubbleList, animatedBubbleItems } from '../chat-body-animations';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-list-recent-messages',
  templateUrl: './list-recent-messages.component.html',
  styleUrls: ['./list-recent-messages.component.scss'],
  animations: [recentMessages, animatedBubbleList, animatedBubbleItems]
})
export class ListRecentMessagesComponent implements OnInit {

  visible = 'none';
  invert = false;
  recentMeessage = [];
  getRecentImages: any;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.viewRecentMessage.subscribe((status) => {
      if (status) {
        this.visible = 'visible';
      }
      if (!status) {
        this.visible = 'none';
      }
    });
    this.chatService.switchTheme.subscribe((status) => {
      if (status) {
        this.invert = !this.invert;
      }
    })
    this.recentMeessage = this.chatService.recentMessages;
  }


  onClickRecentMessage(index) {
    this.getRecentImages = this.recentMeessage[index];
    this.chatService.recentMessagesEvent.next(this.getRecentImages);
  }

}
