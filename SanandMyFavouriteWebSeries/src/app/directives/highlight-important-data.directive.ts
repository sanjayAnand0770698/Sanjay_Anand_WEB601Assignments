import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  @Input() isType: boolean = false;
  @Input() isTitle: boolean = false;
  @Input() isTag: boolean = false;
  @Input() colour: string = "";
  @Input() isAuthor: boolean = false;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.isType) {
      this.highlight('2px solid red');
    }
    if (this.isTag) {
      this.el.nativeElement.style.backgroundColor = this.colour;
    }
    console.log(this.isAuthor)
    if (this.isAuthor) {
      this.el.nativeElement.style.backgroundColor = "black";
      this.el.nativeElement.style.color = "white";
      this.el.nativeElement.style.border = "2px solid #FFA500";
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.isType) {
      this.highlight('');
    }
    if (this.isTag) {
      this.el.nativeElement.style.backgroundColor = "";
    }
    if (this.isTitle) {
      this.el.nativeElement.style.backgroundColor = "";
    }
    if (this.isAuthor) {
      this.el.nativeElement.style.backgroundColor = "";
      this.el.nativeElement.style.color = "";
      this.el.nativeElement.style.border = "";
    }
  }

  @HostListener('click', ['$event']) onClick() {
    this.el.nativeElement.style.backgroundColor = this.colour;
  }

  private highlight(border: string) {
    this.el.nativeElement.style.border = border;
  }
}
