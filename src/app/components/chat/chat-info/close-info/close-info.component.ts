import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { resizeWidthTrigger } from '../chat-info-animation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-close-info',
  templateUrl: './close-info.component.html',
  styleUrls: ['./close-info.component.scss'],
  animations: [resizeWidthTrigger]
})
export class CloseInfoComponent implements OnInit, OnDestroy {

  squareToCircle = 'square';
  closeInfoStatus = false;
  subscription: Subscription;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.subscription = this.chatService.closeInfo.subscribe((status) => {
      status ? (this.squareToCircle = 'circle', this.closeInfoStatus = !this.closeInfoStatus)
        : (this.squareToCircle = 'square', this.closeInfoStatus = false);
    });
  }

  closeInfo() {
    this.chatService.closeInfo.next(!this.closeInfoStatus);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
