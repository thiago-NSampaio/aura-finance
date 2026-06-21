import { Component } from '@angular/core';
import { Chat } from "../components/chat/chat";

@Component({
  selector: 'app-voice-assistant',
  imports: [Chat],
  templateUrl: './voice-assistant.html',
  styleUrl: './voice-assistant.scss',
})
export class VoiceAssistant {
  messages = [];

  get hasMessages(): boolean {
    return this.messages.length > 0;
  }
}
