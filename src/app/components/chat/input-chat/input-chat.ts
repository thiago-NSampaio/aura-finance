import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

export interface ChatMessage {
  role: 'user' | 'assistant';
  kind: 'text' | 'audio';
  content: string;
  status?: 'pending' | 'done';
}

@Component({
  selector: 'app-input-chat',
  imports: [SvgIconComponent, NgClass],
  templateUrl: './input-chat.html',
  styleUrl: './input-chat.scss',
})
export class InputChat {
  @Input({ required: true }) hasMessages: boolean = false;
  @Output() messageSent = new EventEmitter<ChatMessage>();

  text = '';
  isRecording = false;
  private mediaRecorder?: MediaRecorder;
  private mediaStream?: MediaStream;
  private recordedChunks: BlobPart[] = [];

  get canSendText(): boolean {
    return this.text.trim().length > 0;
  }

  onTextInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  sendText(): void {
    if (!this.canSendText) {
      return;
    }

    const content = this.text.trim();
    this.messageSent.emit({ role: 'user', kind: 'text', content });
    this.text = '';
  }

  async toggleVoiceRecording(): Promise<void> {
    if (this.isRecording) {
      await this.stopVoiceRecording();
    } else {
      await this.startVoiceRecording();
    }
  }

  async stopVoiceRecording(): Promise<void> {
    if (!this.mediaRecorder) {
      return;
    }

    this.mediaRecorder.stop();
    this.isRecording = false;

    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
      this.mediaStream = undefined;
    }
  }

  private async startVoiceRecording(): Promise<void> {
    if (!navigator.mediaDevices?.getUserMedia) {
      console.warn('Navegação não suporta gravação de áudio.');
      return;
    }

    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.recordedChunks = [];
      this.mediaRecorder = new MediaRecorder(this.mediaStream);

      this.mediaRecorder.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      });

      this.mediaRecorder.addEventListener('stop', () => {
        const voiceBlob = new Blob(this.recordedChunks, { type: 'audio/webm' });
        this.handleVoiceBlob(voiceBlob);
      });

      this.mediaRecorder.start();
      this.isRecording = true;
    } catch (error) {
      console.error('Erro ao iniciar gravação de voz:', error);
      this.isRecording = false;
    }
  }

  private handleVoiceBlob(blob: Blob): void {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);

    this.messageSent.emit({ role: 'user', kind: 'audio', content: 'Áudio enviado' });

    audio.play().catch(() => {
      console.warn('Não foi possível reproduzir o áudio capturado automaticamente.');
    });
  }
}
