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

export let slideRight = trigger('slideRight', [

  state('collapsed', style({
      transform: 'translateX(-250%)',
  })),

  state('expanded', style({
      transform: 'translateX(0)',
  })),

  transition('collapsed => expanded', [
      animate('0.8s ease-in-out')
  ])
]);

export let slideLeft = trigger('slideLeft', [

  state('collapsed', style({
      transform: 'translateX(250%)',
  })),

  state('expanded', style({
      transform: 'translateX(0)',
  })),

  transition('collapsed => expanded', [
      animate('0.8s ease-in-out')
  ])
]);
