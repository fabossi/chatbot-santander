import {
  transition,
  style,
  animate,
  query,
  stagger,
  animateChild,
  trigger,
  state,
} from '@angular/animations';

export const animatedBubbleList = trigger('list', [
  transition(':enter', [query('@items', stagger(300, animateChild()))]),
]);

export const animatedBubbleItems = trigger('items', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),
    animate(
      '.8s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({ transform: 'scale(1)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)', opacity: 1 }),
    animate('.2s', style({ transform: 'scale(0.7)', opacity: 0 })
    ),
  ]),
]);

export const animatedRecentMessagesList = trigger('rmList', [
  transition(':enter', [query('@rmItems', stagger(300, animateChild()))]),
]);

export const animatedRecentMessagesItems = trigger('rmItems', [
  transition(':enter', [
    style({ transform: 'translateX(-2rem)', opacity: 0 }),
    animate(
      '.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({ transform: 'translateX(1)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(1)', opacity: 1 }),
    animate('.2s', style({ transform: 'translateX(-3rem)', opacity: 0 })
    ),
  ]),
]);

export const animatedGalleryItems = trigger('galleryItems', [
  transition(':enter', [
    style({ transform: 'scale(0.5)' }), // initial
    animate('.8s ease-in', style({ transform: 'scale(1)' })), // final
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)', height: '*' }),
    animate('.8s ease-in', style({ transform: 'scale(0.5)' })),
  ]),
]);

export const btnScrollBottom = trigger('scrollBottom', [
  state(
    'none',
    style({
      transform: 'scale(0.5)',
      opacity: 0,
    })
  ),
  state(
    'visible',
    style({
      transform: 'scale(1)',
      opacity: 1,
    })
  ),
  transition('none <=> visible', animate('0.2s')),
]);

export const recentMessages = trigger('recentMessages', [
  state(
    'none',
    style({
      opacity: 0,
      height: 0,
      // transform: 'translateY(-10rem)',
      padding: 0,
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
    })
  ),
  transition('none <=> visible', animate('0.4s ease-in-out')),
]);
