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
var greetings = ['Oh hi', 'Bonjour', 'What\'s up pal']
var container = document.querySelector('.greeting')

setTimeout(changeGreeting, 2000)

function changeGreeting(){
	container.textContent = greetings[count]
	
	if (count < greetings.length - 1){
		count = count + 1
	} 
	else{
		count = 0
	}
setTimeout(changeGreeting, 2000)
}



