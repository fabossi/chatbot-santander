import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/components/shared/User.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
})
export class ChatBubbleComponent implements OnInit {
  @Input() public chatInfo: User;
  @Input() public index: number;
  borderRadius = '';

  constructor() {}

  ngOnInit() {
    this.applyStyle();
  }

  applyStyle() {
    if (this.index > 1 && this.chatInfo !== ('' || undefined)) {
      return (this.borderRadius = '1.3rem 1.3rem 1.3rem 1.3rem');
    }
    switch (this.chatInfo.type) {
      case 'user':
        return (this.borderRadius = '1.3rem 1.3rem 0 1.3rem');
      case 'watson':
        return (this.borderRadius = '1.3rem 1.3rem 1.3rem 0');
    }
  }
}
