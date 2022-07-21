let fruits = [
  'bananas',
  'strawberries',
  'grapes',
  'apples',
  'watermelon'
];
let section = document.querySelector('section.array-section');

window.addEventListener('DOMContentLoaded', () => {
  // removing elements
  // adding elements
  // replacing elements
  // from start, middle, and end of the array
  
  displayContent(fruits);
})

function displayContent(data) {
  data.forEach(item => {
    const span = document.createElement('span');
    const content = document.createTextNode(item);
    span.appendChild(content);
    span.className = "array-item";
    section.appendChild(span);
  });
}