import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeTextcolor]'
})
export class ChangeTextcolorDirective implements OnInit {

  @Input() txtcolors: any;

  private counterVal = 0;

  constructor(public el: ElementRef, public renderer: Renderer) { }

  ngOnInit() {
    // Use renderer to render the emelemt with styles
    console.log('color', this.txtcolors[0]);
    setInterval(() => {
      this.changeColor();
    }, 1000);
  }


  changeColor() {
    console.log('color', this.txtcolors[this.counterVal]);
    this.renderer.setElementStyle(this.el.nativeElement, 'color', this.txtcolors[this.counterVal])
    this.counterVal++;
    if (this.counterVal > this.txtcolors.length) {
      this.counterVal = 0;
    }

  }


}
