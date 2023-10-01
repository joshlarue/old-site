const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = "Hey I'm red!";

const container = document.querySelector('#container');
container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const newDiv = document.createElement('div');
newDiv.style.borderStyle = 'solid';
newDiv.style.borderColor = 'black';
newDiv.style.backgroundColor = 'pink';
container.appendChild(newDiv);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
newDiv.appendChild(h1);