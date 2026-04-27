import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-power-bi-report',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="powerbi-container" *ngIf="safeUrl; else loading">
      <iframe
        [src]="safeUrl"
        class="powerbi-iframe"
        frameborder="0"
        allowFullScreen="true">
      </iframe>
    </div>
    <ng-template #loading>
      <div class="loading-state">
        <i class="pi pi-spin pi-spinner"></i>
        <p>Cargando reporte de {{ areaOrigen }}...</p>
      </div>
    </ng-template>
  `,
 styles: [`
  .powerbi-container {
    width: 100%;
    height: 600px;         /* Altura fija para escritorio */
    background: var(--bg-secondary);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
  }
  .powerbi-iframe {
    width: 100%;
    height: 100%;          /* Ocupa toda la altura del contenedor */
    border: none;
    display: block;
  }
  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 400px;
    gap: 1rem;
    color: var(--text-secondary);
  }
  .loading-state i {
    font-size: 2rem;
    color: var(--primary);
  }
  @media (max-width: 768px) {
    .powerbi-container {
      height: 400px;       /* Altura más pequeña en móviles */
    }
  }
`]
})
export class PowerBiReport implements OnInit {
  @Input() areaOrigen: string = '';
  safeUrl: SafeResourceUrl | null = null;

  private baseEmbedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNWJjNzRmZTItMGY3NS00ZjY5LTgzM2QtODU4YWZiOTA0Nzg5IiwidCI6ImRjNDFhYWZkLWFkNjgtNGZiZC1hOTE5LWJmM2NjYjhjNTEyMSJ9';
  private tableName = 'expediente';
  private columnName = 'areaOrigen';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.buildEmbedUrl();
  }

  private buildEmbedUrl(): void {
    if (!this.areaOrigen) {
      console.warn('No se recibió el área de origen en el componente.');
      return;
    }

    // Primero, aplicamos la sanitización básica de Angular a la URL completa.
    const filterValue = this.areaOrigen;
    const filterParam = `filter=${this.tableName}/${this.columnName} eq '${filterValue}'`;
    const separator = this.baseEmbedUrl.includes('?') ? '&' : '?';
    let fullUrl = `${this.baseEmbedUrl}${separator}${filterParam}`;

    // Sanear la URL para eliminar cualquier componente problemático.
    const sanitizedUrl = this.sanitizer.sanitize(SecurityContext.URL, fullUrl);

    // Si la sanitización no tuvo éxito, no continuamos.
    if (!sanitizedUrl) {
      console.error('La URL no pudo ser sanitizada correctamente.');
      return;
    }

    // Finalmente, confiamos en la URL ya saneada.
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedUrl);
    console.log('URL final saneada:', this.sanitizer.sanitize(SecurityContext.URL, this.safeUrl));
  }
}