import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-chat',
  imports: [NgClass,SvgIconComponent],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  @Input({required:true}) hasMessages: boolean = false;
}
