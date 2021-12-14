import anime from 'animejs';

export function translate(element) {
  anime({
    targets: element,
    translateX: 500
  });
}

export function resize(element) {
  anime({
    targets: element,
    scale: 1.5,
    translateX: 300,
    backgroundColor: "hsl(200, 50%, 50%)",
    easing: 'easeInOutQuad',
    translate: 0
   
  });
}

