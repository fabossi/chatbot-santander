import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { animatedBubbleItems, animatedBubbleList } from '../../chat-body/chat-body-animations';

@Component({
  selector: 'app-shared-files',
  templateUrl: './shared-files.component.html',
  styleUrls: ['./shared-files.component.scss'],
  animations: [animatedBubbleItems, animatedBubbleList]
})
export class SharedFilesComponent implements OnInit {

  images: Array<[]> = [];
  height = '93';
  width = '93';
  viewAll = false;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.images = this.chatService.images.map((img) => {
      return img.src;
    });

  }

  viewAllImages() {
    this.chatService.viewAllImages.next(!this.viewAll);
  }
}
