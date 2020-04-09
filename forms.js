'use strict';
// Step 1 find a target
var chatFrom = document.getElementById('chatform');
var salmonformthing = document.getElementById('salmonform')

//step 3 attach a callback function
function handleChatting(eventPotatoTomato) {
    //collects the name and message and puts it in the chat list

    //any time we use JS to capture a submit from a form
    // we need to use Event.Prototype.preventDefault
    eventPotatoTomato.preventDefault();


    //when form is submitte it creates an event with ALL the information
    //BELOW this - is finding the relevent information instead of that massive return we saw in the chrome console.

    //entire event
    console.log('Event: ', eventPotatoTomato);

    //event's target (form)
    console.log('Target: ', eventPotatoTomato.target);
    console.log('Target', eventPotatoTomato.target);

    //we look at the property of the target that is the name of the input we want
    console.log('Input :', eventPotatoTomato.target.username);
    console.log('Input : ', eventPotatoTomato.target.city);

    //we look at the event target input value
    console.log('Value : ', eventPotatoTomato.target.username.value);
    console.log('Value : ', eventPotatoTomato.target.city.info);


}

//Step 2 add an EventListener
chatFrom.addEventListener('submit', handleChatting);
salmonformthing.addEventListener('submit', handleChatting);


function Knight(name, color) {
    this.name = name;
    this.color = color;
}


Knight.prototype.render = function render() {
    event.preventDefault();
    var target = document.getElementById('Knights');
    var newLiEL = document.createElement('li');
    newLiEL, TextContent = 'Sir ' + this.name + ' the Knight!';
    newLiEL.style = 'background-color: ' + this.color;
    target.appendChild(newLiEL);
};

function makeFinalRow() {
    var target = document.getElementById('Knights');
    var newLiEL = document.createElement('li');
    newLiEL, TextContent = 'Sir ' + this.name + ' the Knight!';
    target.appendChild(newLiEL);

}

makeFinalRow();
console.log(makeFinalRow);
var Cynthia = new Knight('Cynthia', 'orange');
var Lindsey = new Knight('Lindsey', 'pink');
cynthia.render();
lindsey.render();

var target = document.getElementById('Knights');
var newLiEl = document.createElement('li');
newLiEl.textContent = ' that is my knight!';
target.appendChild(newLiEl);




var KnightForm = document.getElementById('nightnight');
KnightForm.addEventListener('submit', function(eventHere) {
    event.preventDefault();
    var name = eventHere.target.name.value;

    var color = eventHere.target.color.value;
    var toDelete = document.getElementById('deleteMe');
    toDelete.render();

    new Knight(name, color); //this is stored locally

})