// Access the element where we want to add the content
var contentDiv = document.getElementById('content');
// Create a new paragraph element
var newParagraph = document.createElement('p');
// Add text to the new paragraph
newParagraph.textContent = 'This is a new paragraph added through JavaScript.';
// Append the new paragraph to the div
contentDiv.appendChild(newParagraph)

const buttonElement = document.createElement("Button");
buttonElement.textContent = "Click me as well!";
contentDiv.appendChild(buttonElement);
buttonElement.addEventListener('click', function(){
    alert('I have been clicked too');
})

document.getElementById("ourButton").addEventListener('click', function(){
    alert('Button Clicked');
});