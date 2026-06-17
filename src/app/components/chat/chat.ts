import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [NgClass],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  messages = [];

  get hasMessages(): boolean {
    return this.messages.length > 0;
  }
}
