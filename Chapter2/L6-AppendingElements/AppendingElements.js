/**
 * This exercise will demonstrate creating & appending elements within JavaScript.
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 */

let list = document.getElementById("list");
let input = document.getElementById("input");
let button = document.getElementById("button");
button.onclick = appendListItem;

/**
 * TODO: this function will execute whenever the button is clicked. It should create a new <li> HTML element and
 * append it to the "container" ol element. The innerText of the li element should be the current value of the
 * "input" input box. This should result in the user being able to create a list of items by inputting text and then
 * clicking a button.
 *
 * You can create a new element by using the line: let newElement = document.createElement("elementType");
 * That element won't be displayed anywhere until it's attached to an existing part of the site. that can be done
 * using the line existingElement.appendChild(newElement);
 *
 * so, if we had an existing element named "container" and we wanted to append a new image element, that would look like
 * this:
 * let image = document.createElement("image");
 * image.src = "image.jpg";
 * container.appendChild(image);
 *
 * your task is to do the same, but you should append an <li> element with innerText from the input box to the element
 * "list"
 */
function appendListItem(){
//    code here
}