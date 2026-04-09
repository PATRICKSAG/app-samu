import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-overlay">
      <div class="spinner-container">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
        <div class="loading-text">
          <p>{{ currentMessage }}</p>
          <div class="dots">
            <span>.</span><span>.</span><span>.</span>
          </div>
        </div>
        <p class="loading-message">Cargando contenido...</p>
      </div>
    </div>
  `,
  styles: [`
    .spinner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      animation: fadeIn 0.3s ease-out;
    }

    .spinner-container {
      text-align: center;
      padding: 2rem;
      background: var(--card-bg);
      border-radius: 20px;
      box-shadow: var(--shadow-xl);
      min-width: 250px;
      animation: scaleIn 0.3s ease-out;
    }

    .spinner {
      width: 60px;
      height: 60px;
      margin: 0 auto 1.5rem;
      position: relative;
    }

    .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--primary);
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
      animation-delay: -1.0s;
    }

    .loading-text {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      margin-bottom: 0.5rem;
      
      p {
        color: var(--text-primary);
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0;
      }
      
      .dots {
        display: flex;
        gap: 0.15rem;
        
        span {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary);
          animation: bounce 1.4s infinite ease-in-out both;
          
          &:nth-child(1) { animation-delay: -0.32s; }
          &:nth-child(2) { animation-delay: -0.16s; }
        }
      }
    }

    .loading-message {
      color: var(--text-secondary);
      font-size: 0.85rem;
      margin: 0;
    }

    @keyframes sk-bounce {
      0%, 100% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
    }

    @keyframes bounce {
      0%, 80%, 100% {
        transform: scale(0);
      }
      40% {
        transform: scale(1);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes scaleIn {
      from {
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `]
})
export class LoadingSpinnerComponent implements OnInit {
  messages: string[] = [
    'Cargando información',
    'Preparando contenido',
    'Casi listo',
    'Procesando datos'
  ];
  currentMessage: string = this.messages[0];
  private messageInterval: any;

  ngOnInit() {
    let index = 0;
    this.messageInterval = setInterval(() => {
      index = (index + 1) % this.messages.length;
      this.currentMessage = this.messages[index];
    }, 2000);
  }

  ngOnDestroy() {
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
    }
  }
}
