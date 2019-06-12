const button = document.querySelector('.box__button');
const numberContainer = document.querySelector('.box__numbers');
const input = document.querySelector('.box__input');

const calculateFibonacci = (n) => {
	let fibonacciSequence = [];
	console.log(n);
	console.log(typeof n);
	if( n === undefined){
		alert('Please enter a number.');
	}
	else if(n === 0){
		fibonacciSequence.push(0);
	}else if(n === 1){
		fibonacciSequence.push(0,1);
	}else{
		fibonacciSequence.push(0,1);
		for(let i = 2; i <=n; i++){
			fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i-2]);
		}
		console.log(fibonacciSequence);
	}
	return fibonacciSequence;
};

const showNumber = (item, counter) => {
	var number = document.createElement('div');
	number.innerHTML = `<p class="box__number pad">${item}</p>`;
	setTimeout(() => numberContainer.appendChild(number), 3000 * counter);
}

button.addEventListener('click', (e) => {
	e.preventDefault();
	numberContainer.innerHTML = '';
	let sequence = calculateFibonacci(input.value);
	for(let j = 0; j < sequence.length; j++){
		showNumber(sequence[j], j);
	}

});

