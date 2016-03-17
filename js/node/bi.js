var readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout),
	arr = []

rl.setPrompt('Insira o ano: ');
rl.prompt();

rl.on('line', function(line) {
	if ((line % 4 == 0 && line % 100 != 0) || line % 400 == 0){
		console.log('é Bissexto');
		rl.setPrompt('Insira o ano: ');
		rl.prompt();
	}else{
		console.log('Não é Bissexto');
		rl.setPrompt('Insira o ano: ');
		rl.prompt();
	}
})
