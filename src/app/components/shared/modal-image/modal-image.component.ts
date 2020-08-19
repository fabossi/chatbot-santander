import { Component, OnInit } from '@angular/core';
import { animatedGalleryItems } from '../../chat/chat-body/chat-body-animations';
import { ChatService } from 'src/app/services/chat.service';

import { viewAllImagesTrigger, viewAllImagesItems } from './modalImage-animations';
@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
  animations: [viewAllImagesTrigger, animatedGalleryItems, viewAllImagesItems]
})
export class ModalImageComponent implements OnInit {

  images = [];
  imageInView = { src: '', title: '' };
  invert = false;
  srcImage = '../../../../assets/plus-b.svg';
  height = '25';
  width = '10';
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.closeInfo.subscribe((status) => {
      if (status) {
        this.invert = true;
      }
    });
  }

  closeModal() {
    this.chatService.viewAllImages.next(false);
  }

  onAnimationEnds() {
    this.images = this.chatService.images;
  }

  currentImgInfo(id) {
    this.imageInView = this.chatService.images[id];
  }

  loadMore() { }

}
