import { Component } from '@angular/core';
import { Chat } from '../components/chat/chat';
import type { ChatMessage } from '../components/chat/input-chat/input-chat';

@Component({
  selector: 'app-voice-assistant',
  imports: [Chat],
  templateUrl: './voice-assistant.html',
  styleUrl: './voice-assistant.scss',
})
export class VoiceAssistant {
  messages: ChatMessage[] = [];

  get hasMessages(): boolean {
    return this.messages.length > 0;
  }

  handleMessageSent(message: ChatMessage): void {
    this.messages = [...this.messages, { ...message, status: 'done' }];
    this.messages = [
      ...this.messages,
      {
        role: 'assistant',
        kind: 'text',
        content: message.kind === 'audio' ? 'Áudio recebido. Vou analisar seu pedido agora.' : 'Entendi. Estou preparando uma resposta para você.',
        status: 'pending',
      },
    ];

    window.setTimeout(() => {
      const pendingIndex = this.messages.findIndex((entry) => entry.status === 'pending');

      if (pendingIndex >= 0) {
        const nextMessages = [...this.messages];
        nextMessages[pendingIndex] = {
          ...nextMessages[pendingIndex],
          content:
            message.kind === 'audio'
              ? 'Ouvi seu áudio e já posso te ajudar com isso.'
              : 'Resposta da Aura: estou aqui para te ajudar com seu planejamento financeiro.',
          status: 'done',
        };
        this.messages = nextMessages;
      }
    }, 1200);
  }
}
