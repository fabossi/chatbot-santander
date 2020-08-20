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
  invert = 0;
  srcImage = '../../../../assets/chevron-down.svg';
  height = '93';
  width = '93';
  classImgGallery = 'overlay__imgGallery__loadMore__plus';
  borderRadius = '0.7';
  margin = '0.6';
  heightPlus = '25';
  widthPlus = '25';
  widthArray = 0;


  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.switchTheme.subscribe((status) => {
      if (status) {
        this.invert = 1;
      }
    });
  }

  closeModal() {
    this.chatService.viewAllImages.next(false);
  }

  onAnimationEnds() {
    this.images = this.chatService.images;
    this.widthArray = this.images.length - 9;
  }

  currentImgInfo(id) {
    this.imageInView = this.chatService.images[id];
  }

  loadMore() {
    this.widthArray = this.widthArray + 4;
  }

}
