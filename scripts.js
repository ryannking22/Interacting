// Interactivity demo 1

console.log('test')

// Invert colour scheme

var invert = document.querySelector('button')
var body = document.body
var count = 0

invert.addEventListener('click', changeColor)

function changeColor() {
	body.classList.toggle('invert')
}





//Greeting
var greetings = ['Whales are endangered', 'Whales are big', 'Whales are beautiful', 'Whales are mammals', 'Whales are creatures of the open ocean', 'Whales are unable to survive on land', 'Whales are breathtaking', 'Whales are good swimmers', 'SAVE THE WHALES!']
var container = document.querySelector('.greeting')

setTimeout(changeGreeting, 3000)

function changeGreeting(){
	container.textContent = greetings[count]
	
	if (count < greetings.length - 1){
		count = count + 1
	} 
	else{
		count = 0
	}
setTimeout(changeGreeting, 3000)
}



