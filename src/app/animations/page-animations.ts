import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  animateChild,
  keyframes
} from '@angular/animations';

// Animación de fade suave (entrada y salida)
export const fadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      animate('300ms ease-out', style({ opacity: 0 }))
    ], { optional: true }),
    query(':enter', [
      animate('300ms ease-in', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);

// Animación de deslizamiento horizontal
export const slideAnimation = trigger('routeAnimations', [
  transition('home => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(100%)' })
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('400ms ease-out', style({ transform: 'translateX(-100%)' }))
    ], { optional: true }),
    query(':enter', [
      animate('400ms ease-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true })
  ]),
  transition('* => home', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(-100%)' })
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('400ms ease-out', style({ transform: 'translateX(100%)' }))
    ], { optional: true }),
    query(':enter', [
      animate('400ms ease-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true })
  ])
]);

// Animación de escala y fade (efecto más dramático)
export const scaleAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh'
      })
    ], { optional: true }),
    query(':enter', [
      style({ 
        opacity: 0,
        transform: 'scale(0.95)'
      })
    ], { optional: true }),
    query(':leave', [
      style({ 
        opacity: 1,
        transform: 'scale(1)'
      }),
      animate('300ms ease-out', style({ 
        opacity: 0,
        transform: 'scale(0.95)'
      }))
    ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ 
        opacity: 1,
        transform: 'scale(1)'
      }))
    ], { optional: true })
  ])
]);

// Animación de deslizamiento vertical
export const verticalSlideAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateY(100%)', opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateY(0%)', opacity: 1 }),
      animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ transform: 'translateY(-100%)', opacity: 0 }))
    ], { optional: true }),
    query(':enter', [
      animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ transform: 'translateY(0%)', opacity: 1 }))
    ], { optional: true })
  ])
]);

// Animación con keyframes (efecto más complejo)
export const keyframeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      animate('500ms ease-in-out', keyframes([
        style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateY(25px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))
    ], { optional: true }),
    query(':leave', [
      animate('300ms ease-in-out', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 0, transform: 'translateY(-50px)', offset: 1 })
      ]))
    ], { optional: true })
  ])
]);

// Animación de giro y fade (efecto 3D)
export const rotateAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backfaceVisibility: 'hidden'
      })
    ], { optional: true }),
    query(':enter', [
      style({ 
        opacity: 0,
        transform: 'rotateY(90deg)'
      })
    ], { optional: true }),
    query(':leave', [
      style({ 
        opacity: 1,
        transform: 'rotateY(0deg)'
      }),
      animate('400ms ease-out', style({ 
        opacity: 0,
        transform: 'rotateY(-90deg)'
      }))
    ], { optional: true }),
    query(':enter', [
      animate('400ms ease-out', style({ 
        opacity: 1,
        transform: 'rotateY(0deg)'
      }))
    ], { optional: true })
  ])
]);