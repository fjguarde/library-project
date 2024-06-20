import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Directive({
  selector: '[fjgHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input('fjgHighlight') fullText: string = '';
  @Input() highlightedText: string = '';
  @Input() color: string = 'yellow';

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {
      const highlightChanges = changes['highlightedText'];
      if (highlightChanges?.currentValue !== highlightChanges?.previousValue) {
        this.searchAndChangeText();
      }
    }
 
  

  private searchAndChangeText(): void {
    // const escapedText = this.escapeRegExp(this.highlightedText);
      const regex = new RegExp(this.highlightedText, 'gi');
      const modifiedText = this.fullText.replace(regex, match => {
        return `<span style="background-color: ${this.color};">${match}</span>`;
      });
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', modifiedText);
  }

  private escapeRegExp(text: string) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

}
