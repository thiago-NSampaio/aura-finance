import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-chat',
  imports: [NgClass,SvgIconComponent],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  messages = [];

  get hasMessages(): boolean {
    return this.messages.length > 0;
  }
}
