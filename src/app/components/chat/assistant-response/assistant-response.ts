import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assistant-response',
  imports: [],
  templateUrl: './assistant-response.html',
  styleUrl: './assistant-response.scss',
})
export class AssistantResponse {
  @Input() content = 'Entendido. Estou analisando sua solicitação.';
  @Input() isPending = false;
}
