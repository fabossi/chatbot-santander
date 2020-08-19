import { Component } from '@angular/core';
import { animatedGalleryItems } from '../../chat/chat-body/chat-body-animations';
import { ChatService } from 'src/app/services/chat.service';

import { viewAllImagesTrigger, viewAllImagesItems } from './modalImage-animations';
@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
  animations: [viewAllImagesTrigger, animatedGalleryItems, viewAllImagesItems]
})
export class ModalImageComponent {

  images = [];
  imageInView = { src: '', title: '' };
  invert = false;

  constructor(private chatService: ChatService) { }


  closeModal() {
    this.chatService.viewAllImages.next(false);
  }

  onAnimationEnds() {
    this.images = this.chatService.images.map((img) => {
      return img.src;
    });
    this.images.slice(0, 10);
  }

  currentImgInfo(id) {
    this.imageInView = this.chatService.images[id];
  }

}
