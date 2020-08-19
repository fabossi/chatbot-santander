import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {

  switch = false;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  switchTheme() {
    this.chatService.switchTheme.next(this.switch = !this.switch);

    const checkbox = document.querySelector('input[name=theme]');

    // tslint:disable-next-line: space-before-function-paren
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
      }
    });

    const trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
      }, 1000);
    };
  }

}
