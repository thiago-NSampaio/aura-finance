import { Component, Input } from '@angular/core';
import { widgetVariants } from './widget.variants';

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
  @Input() buttonName = '';

  @Input() size: 'default' | 'sm' | 'lg' = 'default';

  getStyles() {
    return widgetVariants({ size: this.size });
  }
}
