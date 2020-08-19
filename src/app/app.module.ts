import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatInfoComponent } from './components/chat/chat-info/chat-info.component';
import { ChatHeaderComponent } from './components/chat/chat-header/chat-header.component';
import { BotInfoComponent } from './components/chat/chat-header/bot-info/bot-info.component';
import { DivisorComponent } from './components/shared/divisor/divisor.component';
import { ContactsComponent } from './components/chat/chat-info/contacts/contacts.component';
import { ChatBodyComponent } from './components/chat/chat-body/chat-body.component';
import { ChatInputComponent } from './components/chat/chat-body/chat-input/chat-input.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { CloseInfoComponent } from './components/chat/chat-info/close-info/close-info.component';
import { SharedFilesComponent } from './components/chat/chat-info/shared-files/shared-files.component';
import { EnterKeyDirective } from './directives/enter-key.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatBubbleComponent } from './components/chat/chat-body/chat-bubble/chat-bubble.component';
import { ModalImageComponent } from './components/shared/modal-image/modal-image.component';
import { HttpClientModule } from '@angular/common/http';
import { ListRecentMessagesComponent } from './components/chat/chat-body/list-recent-messages/list-recent-messages.component';
import { LazyImageComponent } from './components/chat/chat-info/shared-files/lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatInfoComponent,
    ChatHeaderComponent,
    BotInfoComponent,
    DivisorComponent,
    ContactsComponent,
    ChatBodyComponent,
    ChatInputComponent,
    ProfileComponent,
    ChatBubbleComponent,
    CloseInfoComponent,
    SharedFilesComponent,
    EnterKeyDirective,
    ModalImageComponent,
    ListRecentMessagesComponent,
    LazyImageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
