
const cowWord = require('./information.js');

const cowsay = require("cowsay");



console.log(cowsay.say({
	text :`Hello I'm ${cowWord.name} from Wild code ${cowWord.campus} campus`	
}));

