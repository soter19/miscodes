var readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout),
	arr = []

rl.setPrompt('Insert a Year: ');
rl.prompt();

rl.on('line', function(line) {
	if ((line % 4 == 0 && line % 100 != 0) || line % 400 == 0){
		console.log('Is a leap year');
		rl.setPrompt('Insert a Year: ');
		rl.prompt();
	}else{
		console.log("Isn't a leap year");
		rl.setPrompt('Insert a Year: ');
		rl.prompt();
	}
})
