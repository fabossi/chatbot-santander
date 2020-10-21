import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-shared-links',
  templateUrl: './shared-links.component.html',
  styleUrls: ['./shared-links.component.scss']
})
export class SharedLinksComponent implements OnInit {


  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

}
