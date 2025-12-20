import { Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomColor]',
})
export class CustomColor {
  private readonly renderer = inject(Renderer2);
  private readonly element = inject(ElementRef);

  color = input<textColor>('red');

  constructor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color());
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
    this.renderer.listen(this.element.nativeElement, 'click', () => {
      const newColor = this.getRandomColor();
      this.renderer.setStyle(this.element.nativeElement, 'color', newColor);
      console.log(`this color has changed to ${newColor}`);
    });
  }

  private getRandomColor() {
    const colors: textColor[] = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple', 'black'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

export type textColor = 'red' | 'blue' | 'green' | 'yellow' | 'orange' | 'pink' | 'purple' | 'black';