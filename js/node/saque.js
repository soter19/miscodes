var readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout),
    saque50,
    saque10,
    saque1,
    saque50r,
    saque10r,
    saque1r,
    flag;

// Clear Terminal
process.stdout.write('\u001B[2J\u001B[0;0f');

// Introduction

console.log('Calculadora de saque: Notas disponíveis: 50,10,1 \n')

rl.setPrompt('Insira o saque desejado: ');
rl.prompt();

rl.on('line', function(line) {
    saque50 = parseInt(line / 50);
    saque50r = line % 50;
    saque10 = parseInt(saque50r / 10);
    saque10r = parseInt(saque50r % 10);
    saque1 = saque10r;

    console.log("")

    if (saque50 > 0 ){
        console.log(saque50 + " Notas de 50");
    }
    if (saque10 > 0){
        console.log(saque10 + " Notas de 10");
    }
    if (saque1 > 0){
        console.log(saque1 + " Notas de 1");
    }
    console.log("")

    if (flag = 1){
        rl.setPrompt("Deseja Finalizar?\n")
        rl.prompt();
        if (line == "sim" || line == "s" || line == "S" || line == "Sim"){
            console.log("Obrigado, volte sempre.")
            process.exit(0)
        }else{
            rl.setPrompt("Insira o saque desejado\n")
            flag = 0
        }
    }else{
        rl.setPrompt('Insira o saque desejado: ');
        rl.prompt();
    }



});
