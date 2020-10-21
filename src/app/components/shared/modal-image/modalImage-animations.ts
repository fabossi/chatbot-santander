import { trigger, transition, style, animate } from '@angular/animations';


export const viewAllImagesTrigger = trigger('viewAllState', [
  transition(':enter', [
    style({ transform: 'scale(0)', opacity: 0 }),
    animate('.8s ease-in-out',
      style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  // transition(':leave', [
  //   style(
  //     { transform: 'scale(1)', opacity: 1, height: '*' }
  //   ),
  //   animate('.4s ease-in-out',
  //     style(
  //       { transform: 'translateX(-200px)', opacity: 0, height: '*' }
  //     ))
  // ])
]);

export const viewAllImagesItems = trigger('viewAllItems', [
  transition(':enter', [
    style({ transform: 'translateY(-15rem)', opacity: 0 }),
    animate('.7s ease-out',
      style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);
