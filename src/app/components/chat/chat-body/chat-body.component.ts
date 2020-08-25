import { Component, OnInit, ElementRef, ViewChild, IterableDiffers, IterableDiffer, DoCheck, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { User } from '../../shared/User.model';
import { animatedBubbleItems, animatedBubbleList, btnScrollBottom } from './chat-body-animations';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss'],
  animations: [animatedBubbleItems, animatedBubbleList, btnScrollBottom]
})

export class ChatBodyComponent implements OnInit, DoCheck, OnDestroy {
  @ViewChild('bubbleScrolled', { static: false }) private scrollDown: ElementRef;

  private iterableDiffer: IterableDiffer<any>;
  subscription: Subscription;
  btnScrollToBottom = 'none';

  public userData: User[];

  constructor(private chatService: ChatService, private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this.iterableDiffers.find(this.chatService.userInfo).create();

  }

  ngOnInit() {
    this.subscription = this.chatService.userSent.subscribe((userData: User[]) => {
      this.userData = userData;
    });
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.chatService.userInfo);
    if (changes) {
      setTimeout(() => {
        this.scrollToBottom();
        this.scrollBottomAfter40px();
      }, 100);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  scrollToBottom(): void {
    try {
      this.scrollDown.nativeElement.scrollTop = this.scrollDown.nativeElement.scrollHeight;
      this.btnScrollToBottom = 'none';
    } catch (err) {
      console.log(err);
    }
  }

  scrollBottomAfter40px() {
    this.scrollDown.nativeElement.onscroll = (e) => {
      const scroll = e.target.scrollTop;
      if (scroll < 300) {
        this.btnScrollToBottom = 'visible';
      }
      else {
        this.btnScrollToBottom = 'none';
      }
    };
  }
}
