import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-chat',
  imports: [NgClass, SvgIconComponent],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  @Input({ required: true }) hasMessages: boolean = false;

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

    console.log('Enviando texto para Aura:', this.text);
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
    console.log('Voz capturada:', blob);

    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play().catch(() => {
      console.warn('Não foi possível reproduzir o áudio capturado automaticamente.');
    });
  }
}
