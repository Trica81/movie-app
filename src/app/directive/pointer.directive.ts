import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPointer]'
})
export class PointerDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.pointer('pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.pointer(null);
  }

  private pointer(color: string) {
    this.el.nativeElement.style.cursor = color;
  }

}
