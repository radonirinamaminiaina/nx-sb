import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() size: 'lg' | 'md' | 'sm' = 'md';
  @Input() variant: 'primary' | 'danger' | 'success' | 'warning' | 'default' =
    'primary';
  @Input() disabled = false;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click = new EventEmitter();

  onClick(event: MouseEvent) {
    this.click.emit(event);
  }
}
