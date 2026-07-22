import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-request',
  imports: [],
  templateUrl: './user-request.html',
  styleUrl: './user-request.scss',
})
export class UserRequest {
  @Input() content = 'Mensagem enviada';
  @Input() kind: 'text' | 'audio' = 'text';
}
