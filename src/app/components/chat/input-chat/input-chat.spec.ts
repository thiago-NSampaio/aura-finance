import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChat } from './input-chat';

describe('InputChat', () => {
  let component: InputChat;
  let fixture: ComponentFixture<InputChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a text message when sending', () => {
    let emittedMessage: { kind: 'text' | 'audio'; content: string } | undefined;

    component.messageSent.subscribe((message) => {
      emittedMessage = message;
    });

    component.text = 'Quero ver meu saldo';
    component.sendText();

    expect(emittedMessage).toEqual({ kind: 'text', content: 'Quero ver meu saldo' });
    expect(component.text).toBe('');
  });
});
