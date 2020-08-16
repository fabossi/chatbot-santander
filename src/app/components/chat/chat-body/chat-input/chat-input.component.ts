import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { User } from 'src/app/components/shared/User.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  inputForm: FormGroup;
  viewErrorMessages: any;
  shakeInput = false;
  showRecentMsg = false;
  invert = false;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.createForm();
    this.chatService.sendResponseFromWatson('');
    this.chatService.switchTheme.subscribe((status) => {
      if (status) {
        this.invert = !this.invert;
      }
    });
    this.chatService.recentMessagesEvent.subscribe((recentMsg) => {
      if (recentMsg.length !== 0) {
        this.inputForm.reset();

        this.inputForm.get('inputText').setValue(recentMsg);
      }
    });
  }

  onSubmitText() {
    const now = new Date()
      .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      .toLowerCase();
    const userInfo: User = {
      text: this.inputForm.get('inputText').value,
      type: 'user',
      time: now,
      tempMessage: '',
    };

    if (
      this.inputForm.get('inputText').value !== ('' || undefined) &&
      !this.inputForm.get('inputText').errors
    ) {
      this.chatService.sendResponseFromWatson(
        this.inputForm.get('inputText').value
      );
      this.chatService.getUserInfo(userInfo);
      this.onGetRecentMessage();
      this.inputForm.reset();
    } else {
      this.shakeInput = !this.shakeInput;
      const userMessageError: User = {
        text: 'Refaça sua frase com pelo menos 3 caracteres.',
        type: 'watson',
        time: null,
        tempMessage: 'Campo obrigatório',
      };
      this.chatService.getUserInfo(userMessageError);
    }
  }

  submitWatsonResponse() {}

  createForm() {
    this.inputForm = new FormGroup({
      inputText: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  showRecentMessages() {
    this.chatService.viewRecentMessage.next(
      (this.showRecentMsg = !this.showRecentMsg)
    );
  }

  onGetRecentMessage() {
    let msg;
    msg = this.inputForm.get('inputText').value;
    if (
      msg.split(' ').length >= 4 &&
      this.chatService.recentMessages.indexOf(msg) === -1
    ) {
      this.chatService.recentMessages.push(msg);
    }
  }
}
