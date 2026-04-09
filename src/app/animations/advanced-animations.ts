import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  animateChild,
  stagger
} from '@angular/animations';

export const advancedPageAnimation = trigger('routeAnimations', [
  transition('home => ufremid', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 })
    ]),
    query(':leave', [
      animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ]),
    query(':enter', [
      animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
  ]),
  
  transition('ufremid => home', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 })
    ]),
    query(':leave', [
      animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(100%)', opacity: 0 }))
    ]),
    query(':enter', [
      animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
  ]),
  
  transition('* => *', [
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
      style({ opacity: 1 }),
      animate('300ms ease-out', style({ opacity: 0 }))
    ], { optional: true }),
    query(':enter', [
      animate('300ms ease-in', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);

// Animación con stagger para elementos hijos
export const staggerAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);