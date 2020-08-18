import { trigger, transition, style, animate, state } from '@angular/animations';

export const resizeWidthTrigger = trigger('infoState', [
  state('default', style({
    width: '25%',
    height: '100%',
    opacity: 1
  })),
  state('clicked', style({
    width: '6%',
    opacity: 0
  })),
  transition('default <=> clicked', animate('0.9s ease-out')),
  state('visible', style({
    opacity: 1
  })),
  state('notVisible', style({
    opacity: 0
  })),
  transition('visible <=> notVisible', animate('0.3s ease-out')),
  state('square', style({
    borderRadius: '1.3rem',
    transform: 'translateX(0) rotate(0)'
  })),
  state('circle', style({
    borderRadius: '1.3rem',
    transform: 'translateX(34rem) rotate(315deg)',
    'z-index': 2
  })),
  transition('square <=> circle', animate('.9s ease-out'))
]);

