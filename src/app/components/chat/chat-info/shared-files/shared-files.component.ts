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
  height = '93px';
  width = '93px';
  margin = '0.6';
  borderRadius = '0.7';
  clipPath = 'polygon(0% 0%, 100% 0%, 100% 99%, 0% 100%)';
  viewAll = false;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.images = this.chatService.images.map((img) => {
      return img.src;
    });

    this.images = this.images.slice(0, 6);


  }

  viewAllImages() {
    this.chatService.viewAllImages.next(!this.viewAll);
  }
}
