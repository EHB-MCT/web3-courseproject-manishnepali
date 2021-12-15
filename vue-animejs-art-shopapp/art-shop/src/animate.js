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
    scale: 1.2,
    translateX: 200,
    borderRadius:  '0',
    easing: 'easeInOutQuad',
    translate: 0
   
  });
}
export function show(element) {
  anime({
    targets: element,
    opacity: 1
  })
  
}

