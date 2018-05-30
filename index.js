/*

			Colorful console log

*/
// Object.defineProperty(log, 'red', { enumerable: true });
// Object.defineProperty(log, 'bla', { enumerable: true });
// Object.defineProperty(log, 'cya', { enumerable: true });
// Object.defineProperty(log, 'whi', { enumerable: true });
// Object.defineProperty(log, 'yel', { enumerable: true });
// Object.defineProperty(log, 'gre', { enumerable: true });
// Object.defineProperty(log, 'mag', { enumerable: true });
// Object.defineProperty(log, 'blu', { enumerable: true });

/*
	@description The constructor cl (short for colorLog) is syntactic sugar,
	It is intended to create a shortened record of a frequently used command
	console.log ().
	It also has a number of methods for color output of information. Methods have short-
	First names, first three letters of color in which the information will be displayed.
	@param {bla} - (abbreviated from 'black'), the information is highlighted in black.
	@param {red} - information is highlighted in red.
	@param {gre} - (short for 'green'), the information is highlighted in green.
	@param {yel} - (short for 'yellow'), the information is highlighted in yellow.
	@param {blu} - (abbreviated from 'blue'), the information is highlighted in blue.
	@param {mag} - (short for 'magenta'), the information is highlighted in the color of the magenta.
	@param {cya} - (abbreviated from 'cyan'), the information is highlighted in the color of cyan.
	@param {whi} - (abbreviated from 'white'), the information is highlighted in white.
	There are also other methods.
	@param {methods} - lists all methods for color output of information.
	@param {log} - normal logging as with console.log ().
	@param {dir} - displays the list of properties of the specified object, as with console.dir

	@description Takes only one argument.
	@param {content} - what you need to output to the console..
	
*/


class colorLog {
	constructor( content) {
		this.content = content;
	}
	bla(content){
		return  console.log('\x1b[30m', content)
	}
	red(content){
		return  console.log('\x1b[31m', content)
	}
	gre(content){
		return  console.log('\x1b[32m' , content)
	}
	yel(content){
			return  console.log('\x1b[33m' , content)
	}
	blu(content){
		return  console.log( '\x1b[34m', content)
	}
	mag(content){
			return  console.log('\x1b[35m' , content)
		}
	cya(content){
		return  console.log('\x1b[36m' , content)
	}
	whi(content){
			return  console.log('\x1b[37m' , content)
	}

	methods(){
		// for (let func in log){
		// 	console.log(func)
		// };

		// console.log(Object.keys(cl))
		
	}

	dir(content){
		console.dir(content);

	} 

	log(content){
		console.log(content)
	}
}

const cl = new colorLog();

export default cl;




