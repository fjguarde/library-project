import { DOCUMENT, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fjg-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss'],
  // encapsulation: ViewEncapsulation.None, // Si queremos poder modificar estilos desde fuera
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopButtonComponent implements OnInit {
  public showButton = false // Para mostrar u ocultar el botón

  private readonly SCROLL_TO_DISPLAY = 200 //Scroll mínimo a sobrepasar para mostrarse

  private readonly TOP_POSITION: [number, number] = [0, 0] // Coordenadas X Y

  @Input() text: string = ''; // Texto del botón
  @Input() showIcon: boolean = true; // Para controlar se se muestra el icono svg
  @Input() color: string = '#068fea'; // Color de botón

  constructor(
    // @Inject(DOCUMENT) private readonly document: Document, // Interfáz que nos permite acceder al DOM
    // Clase de Angular para controlar el scroll
    private readonly viewportScroller: ViewportScroller, 
  ) { }

  ngOnInit(): void {
    if (this.text) {
      this.showIcon = false
    }
  }

  // Decorador para manejar eventos del DOM en esta caso el evento scroll
  // El objeto window representa la ventana que contiene un documento DOM (Document Object Model)
  // const { scrollTop  } = this.document.scrollingElement as HTMLElement
  @HostListener('window:scroll') 
  private onWindowScroll(): void {
    const scrollTop  = this.viewportScroller.getScrollPosition();
    this.showButton = scrollTop[1] > this.SCROLL_TO_DISPLAY
  }

  public scrollToTop(): void {
    this.viewportScroller.scrollToPosition(this.TOP_POSITION)
  }

}
