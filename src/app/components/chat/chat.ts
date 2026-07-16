import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputChat } from "./input-chat/input-chat";
import { UserRequest } from "./user-request/user-request";
import { AssistantResponse } from "./assistant-response/assistant-response";
@Component({
  selector: 'app-chat',
  imports: [NgClass, InputChat, UserRequest, AssistantResponse],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  @Input({ required: true }) hasMessages: boolean = false;
}
