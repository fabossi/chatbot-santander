import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './services/chat.service';
import { resizeWidthTrigger } from './components/chat/chat-info/chat-info-animation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [resizeWidthTrigger]
})
export class AppComponent implements OnInit, OnDestroy {

  closeInfo = 'default';
  visibility = 'visible';
  viewImages = false;
  subscription: Subscription;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.subscription = this.chatService.closeInfo.subscribe((status) => {
      // status ? (this.closeInfo = 'clicked', this.visibility = 'notVisible')
      //   : (this.closeInfo = 'default', this.visibility = 'visible');
      if (status) {
        this.closeInfo = 'clicked';
        this.visibility = 'notVisible';
      }
      if (!status) {
        this.closeInfo = 'default';
        this.visibility = 'visible';
      }
    });
    this.subscription = this.chatService.viewAllImages.subscribe((status) => {
      status ? this.viewImages = !this.viewImages : this.viewImages = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
