var readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout),
	arr = []

// Clear Terminal
process.stdout.write('\u001B[2J\u001B[0;0f');

console.log('Calculadora de Regra de Três\n')

rl.setPrompt('Insira o primeiro número: ');
rl.prompt();

rl.on('line', function(line) {
	lined = parseFloat(line);

    if (isNaN(lined)){
    	rl.setPrompt('Por Favor, insira um número; :');
    	rl.prompt();
    }else{
    	if (arr.length == 0){
    		rl.setPrompt('Insira o segundo número: ');
    		arr.push(lined);
    		rl.prompt();
    	}else if (arr.length == 1){
    		rl.setPrompt('Insira o terceiro número: ');
    		arr.push(lined);
    		rl.prompt();
    	}else{
    		arr.push(lined);
    		result = (arr[1] * arr[2])/arr[0];
    		console.log(arr[0] +'	'+ arr[1])
    		console.log(arr[2] +'	x')
    		console.log('o resultado é:	'+ result + '\n\n\n');
    		finished = true;
    		process.exit(0);
    	}
    }
});
