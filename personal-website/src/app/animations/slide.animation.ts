import {
  animate,
  animation,
  animateChild,
  group,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
  query
} from '@angular/animations';

export let slide = trigger('slide', [

  state('onTheLeft', style({
    display: 'none',
    position: 'absolute',
    zIndex: '100',
    transform: 'translateX(-250%)',
  })),

  state('onTheCenter', style({
    opacity: 1,
    position: 'relative',
    zIndex: '100',
    transform: 'translateX(0)',
  })),

  state('onTheRight', style({
    display: 'none',
    position: 'absolute',
    zIndex: '100',
    transform: 'translateX(250%)',
  })),

  transition('onTheLeft => onTheCenter', [
      animate('1.0s ease-in-out')
  ]),

  transition('onTheCenter => onTheRight', [
    animate('1.0s ease-in-out')
  ]),

  transition('onTheRight => onTheCenter', [
    animate('1.0s ease-in-out')
  ]),

  transition('onTheCenter => onTheLeft', [
    animate('1.0s ease-in-out')
  ])
]);
