import { Injectable, Inject, Renderer2, RendererFactory2, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkModeSubject.asObservable();
  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loadInitialTheme();
  }

  private loadInitialTheme(): void {
    if (!this.isBrowser) {
      // Si no estamos en el navegador, usar modo claro por defecto
      this.setTheme(false);
      return;
    }

    try {
      // Verificar preferencia guardada
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      this.setTheme(isDark);
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
      this.setTheme(false);
    }
  }

  toggleTheme(): void {
    if (!this.isBrowser) return;
    const newTheme = !this.isDarkModeSubject.value;
    this.setTheme(newTheme);
  }

  private setTheme(isDark: boolean): void {
    const themeClass = isDark ? 'dark-theme' : 'light-theme';
    const body = this.document.body;
    
    if (!body) return;
    
    // Remover clase actual
    if (body.classList.contains('light-theme')) {
      this.renderer.removeClass(body, 'light-theme');
    }
    if (body.classList.contains('dark-theme')) {
      this.renderer.removeClass(body, 'dark-theme');
    }
    
    // Añadir nueva clase
    this.renderer.addClass(body, themeClass);
    
    // Guardar preferencia solo en navegador
    if (this.isBrowser) {
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (error) {
        console.warn('Error saving to localStorage:', error);
      }
    }
    
    // Actualizar subject
    this.isDarkModeSubject.next(isDark);
  }

  getCurrentTheme(): boolean {
    return this.isDarkModeSubject.value;
  }
}