import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.html',
  styleUrl: './widget.scss',
})
export class Widget {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() footer = '';
}
