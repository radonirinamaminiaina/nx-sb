import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'lib-card-login',
  standalone: true,
  imports: [CommonModule, CardComponent, InputComponent, ButtonComponent],
  templateUrl: './card-login.component.html',
  styleUrl: './card-login.component.scss',
})
export class CardLoginComponent {
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() submit = new EventEmitter();

  isSubmitted = false;

  async onSubmit() {
    this.submit.emit();
    this.isSubmitted = true;
  }
}
