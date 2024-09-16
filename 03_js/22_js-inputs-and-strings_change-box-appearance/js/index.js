/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [ ] Add an event listener for each input element.
– [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/
const box = document.querySelector('[data-js=box]'); // Assuming the box has an ID of 'box'
const inputColor = document.querySelector('[data-js=input-color]');
const inputRadius = document.querySelector('[data-js=input-radius]');
const inputRotation = document.querySelector('[data-js=input-rotation]');

inputColor.addEventListener('input', function() {
    //console.log('Farbeingabe:', this.value); //zur Überprüfung ob der Eventlistener funktioniert
  const hueValue = parseInt(this.value);
  box.style.backgroundColor = `hsl(${hueValue}, 100%, 50%)`;
});

inputRadius.addEventListener('input', function() {
  const radiusValue = parseFloat(this.value);
  box.style.borderRadius = `${radiusValue}px`;
  
  // Make the box circular when radius reaches its maximum value
  if (radiusValue >= Math.max(box.offsetWidth, box.offsetHeight) / 2) {
    box.style.borderRadius = '50%';
  }
});

inputRotation.addEventListener('input', function() {
  const rotationValue = parseFloat(this.value);
  box.style.transform = `rotate(${rotationValue}deg)`;
});
