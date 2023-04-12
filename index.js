// Write your code here!
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Replace 'YOUR-NAME' with the actual name you want to display
newHeader.textContent = 'Hope is the champion';

// Append the newHeader to the DOM
document.body.appendChild(newHeader);

const mainNode = document.getElementById('main');
mainNode.remove();

