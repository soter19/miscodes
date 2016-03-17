// Init

// Vars
	var seed = new Date().getMilliseconds();

// Clear Terminal
process.stdout.write('\u001B[2J\u001B[0;0f');

// Input

var readline = require('readline'),
	rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Insira o seu aniversário: ');
rl.prompt();

rl.on('line', function(line) {
	line = line.replace(/[^0-9 ]/g, "")
	if(line != "" && line != undefined && !isNaN(line) && line.toString().length <= 16){
		seed = line;
	}else{
		console.log("Aniversário inválido");
	}

	while (letras.length > 0)
	{
		var l = letras[0];
		var found = false;
		var oldIndex = -1;
		var Index = -1;
		while(!found){
			Index = random(palavras.length);
			while(Index == oldIndex){
				Index = random(palavras.length);
			}
			oldIndex = Index;
			var p = palavras[Index];
			
			var lPlug = l.plug;
			var pPlug = p.plug;

			var preferSM = false;
			var preferSF = false;
			if(lPlug == "s"){
				var smLCount = 0, sfLCount = 0;
				letras.forEach(function(el,index,array){
					if(el.plug == "sm") smLCount++;
					else if(el.plug == "sf") sfLCount++;
				});

				var smPCount = 0;
				var sfPCount = 0;
				palavras.forEach(function(el,index,array){
					if(el.plug == "sm") smPCount++;
					else if(el.plug == "sf") sfPCount++;
				});

				if(smPCount == smLCount) {
					preferSF = true;
				} else if(sfPCount == sfLCount){
					preferSM = true;
				}
			}
			if(lPlug == pPlug){
				found = true;
			} else if(contains(lPlug, 's') && contains(pPlug,'s')){
				if(contains(lPlug,'m')){
					found = contains(pPlug,'m');
				} else if(contains(lPlug,'f')){
					found = contains(pPlug,'f');
				}else {
					if(preferSM){
						found = contains(pPlug,'m');
					} else if(preferSF) {
						found = contains(pPlug,'f');
					} else
						found = true;
				}
			}  else {
				found = false;
			}
		}
		console.log(l.letra + p.palavra);
		palavras.splice(Index, 1);
		letras.splice(0,1);
		/*
		for(var i=0;i<letras.length;i++){
			console.log("available letra plug["+i+"]: "+letras[i].plug);
		}

		for(var i=0;i<palavras.length;i++){
			console.log("available plavra plug["+i+"]: "+palavras[i].plug);
		}
		*/
	}
	process.exit(0);
})


function letra (id, letra, plug){
	this.id = id;
	this.letra = letra;
	this.plug = plug;
}

function palavra (id,palavra,plug){
	this.id = id;
	this.palavra = palavra;
	this.plug = plug;
}

function resultado(texto){
	this.texto = texto;
}


function random(top) {
    var x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * top);
}

var letra1 = new letra(1,"Amou daquela vez como se fosse a ","sf"),
	letra2 = new letra(2,"Beijou sua mulher como se fosse a ","sf"),
	letra3 = new letra(3,"E cada filho seu como se fosse o ","sm"),
	letra4 = new letra(4,"E atravessou a rua com seu passo ","sm"),
	letra5 = new letra(5,"Subiu a construção como se fosse ","s"),
	letra6 = new letra(6,"Ergueu no patamar quatro paredes ","pf"),
	letra7 = new letra(7,"Tijolo com tijolo num desenho ","sm"),
	letra8 = new letra(8,"Seus olhos embotados de cimento e ","s"),
	letra9 = new letra(9,"Sentou pra descansar como se fosse ","s"),
	letra10 = new letra(10,"Comeu feijão com arroz como se fosse um ","sm"),
	letra11 = new letra(11,"Bebeu e soluçou como se fosse um ","sm"),
	letra12 = new letra(12,"Dançou e gargalhou como se ouvisse ","s"),
	letra13 = new letra(13,"E tropeçou no céu como se fosse um ","sm"),
	letra14 = new letra(14,"E flutuou no ar como se fosse um ","sm"),
	letra15 = new letra(15,"E se acabou no chão feito um pacote ","sm"),
	letra16 = new letra(16,"Agonizou no meio do passeio ","sm"),
	letra17 = new letra(17,"Morreu na contramão atrapalhando o ","sm")

var palavra1 = new palavra(1,"última","sf"),
	palavra2 = new palavra(2,"última","sf"), 
	palavra3 = new palavra(3,"único","sm"),
	palavra4 = new palavra(4,"tímido","sm"),
	palavra5 = new palavra(5,"máquina","s"),
	palavra6 = new palavra(6,"sólidas","pf"),
	palavra7 = new palavra(7,"mágico","sm"),
	palavra8 = new palavra(8,"lágrima","sf"),
	palavra9 = new palavra(9,"sábado","sm"),
	palavra10 = new palavra(10,"príncipe","sm"),
	palavra11 = new palavra(11,"náufrago","sm"),
	palavra12 = new palavra(12,"música","sf"),
	palavra13 = new palavra(13,"bêbado","sm"),
	palavra14 = new palavra(14,"pássaro","sm"),
	palavra15 = new palavra(15,"flácido","sm"),
	palavra16 = new palavra(16,"público","sm"),
	palavra17 = new palavra(17,"tráfego","sm")

var letras = [  letra1,
				letra2,
				letra3,
				letra4,
				letra5,
				letra6,
				letra7,
				letra8,
				letra9,
				letra10,
				letra11,
				letra12,
				letra13,
				letra14,
				letra15,
				letra16,
				letra17
				]

var palavras = [palavra1,
				palavra2,
				palavra3,
				palavra4,
				palavra5,
				palavra6,
				palavra7,
				palavra8,
				palavra9,
				palavra10,
				palavra11,
				palavra12,
				palavra13,
				palavra14,
				palavra15,
				palavra16,
				palavra17
				]
	
function contains(str, strToFind){
	return str.indexOf(strToFind) > -1;
}


return;
