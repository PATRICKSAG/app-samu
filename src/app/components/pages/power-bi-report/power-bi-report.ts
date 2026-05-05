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
        <p>Cargando reporte...</p>
      </div>
    </ng-template>
  `,
  styles: [`
    .powerbi-container {
      width: 100%;
      min-height: 600px;
      background: var(--bg-secondary);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: var(--shadow-md);
    }
    .powerbi-iframe {
      width: 100%;
      height: 100%;
      min-height: 600px;
      border: none;
      display: block;
    }
    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 600px;
      gap: 1rem;
      color: var(--text-secondary);
    }
    @media (max-width: 768px) {
      .powerbi-container, .powerbi-iframe, .loading-state {
        min-height: 400px;
      }
    }
  `]
})
export class PowerBiReportComponent {
  private _reportUrl: string = '';
  safeUrl: SafeResourceUrl | null = null;

  @Input()
  set reportUrl(value: string) {
    this._reportUrl = value;
    if (value) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
    } else {
      console.warn('No se proporcionó URL del reporte');
      this.safeUrl = null;
    }
  }

  get reportUrl(): string {
    return this._reportUrl;
  }

  constructor(private sanitizer: DomSanitizer) {}
}