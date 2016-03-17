var withdraw50,
    withdraw10,
    withdraw1,
    withdraw50r,
    withdraw10r,
    withdraw1r,
    flag;

var verbose = false;

// Clear Terminal
process.stdout.write('\u001B[2J\u001B[0;0f');

// Introduction

console.log('Withdraw Machine - Available bills: 50,10,1 \n')

rl.setPrompt('Insert value to withdraw : ');
rl.prompt();

rl.on('line', function(line) {
    withdraw50 = parseInt(line / 50);
    withdraw50r = line % 50;
    withdraw10 = parseInt(withdraw50r / 10);
    withdraw10r = parseInt(withdraw50r % 10);
    withdraw1 = withdraw10r;

    if(verbose){
	    if (withdraw50 > 0 ){
	        console.log(withdraw50 + " 50 bills");
	    }
	    if (withdraw10 > 0){
	        console.log(withdraw10 + " 10 bills");
	    }
	    if (withdraw1 > 0){
	        console.log(withdraw1 + " 1 bills");
	    }
    }

    if (flag = 1){
        rl.setPrompt("Wrap up operation?\n")
        rl.prompt();
        if (line == "yes" || line == "y" || line == "Y" || line == "Yes"){
            console.log("Thanks, have a nice day.")
            process.exit(0)
        }else{
            rl.setPrompt("Insert wanted withdraw\n")
            flag = 0
        }
    }else{
        rl.setPrompt('Insert wanted withdraw: ');
        rl.prompt();
    }



});
