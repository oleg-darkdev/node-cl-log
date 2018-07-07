/**
 * 	@description The constructor cl (Colorful console log) - (short for colorLog) is syntactic sugar,
 * It is intended to create a shortened record of a frequently used command console.log ().
 * It also has a number of methods for color output of information. Methods have short-
 * First names, first three letters of color in which the information will be displayed.
 * @param {bla} - (abbreviated from 'black'), the information is highlighted in black.
 * @param {red} - information is highlighted in red.
 * @param {gre} - (short for 'green'), the information is highlighted in green.
 * @param {yel} - (short for 'yellow'), the information is highlighted in yellow.
 * @param {blu} - (abbreviated from 'blue'), the information is highlighted in blue.
 * @param {mag} - (short for 'magenta'), the information is highlighted in the color of the magenta.
 * @param {cya} - (abbreviated from 'cyan'), the information is highlighted in the color of cyan.
 * @param {whi} - (abbreviated from 'white'), the information is highlighted in white.
 * There are also other methods.
 * @param {methods} - lists all methods for color output of information.
 * @param {log} - normal logging as with console.log ().
 * @param {dir} - displays the list of properties of the specified object, as with console.dir
 * @description Takes only one argument.
 * @param {content} - what you need to output to the console..
 */
class colorLog {
  constructor(content) {
    this.content = content;
  }
  bla(content) {
    console.log('');
    console.log('\x1b[30m', content)
    console.log('\x1b[37m', '');
  }
  red(content) {
    console.log('');
    console.log('\x1b[31m', content)
    console.log('\x1b[37m', '');
  }
  gre(content) {
    console.log('');
    console.log('\x1b[32m', content)
    console.log('\x1b[37m', '');
  }
  yel(content) {
    console.log('');
    console.log('\x1b[33m', content)
    console.log('\x1b[37m', '');
  }
  blu(content) {
    console.log('');
    console.log('\x1b[34m', content)
    console.log('\x1b[37m', '');
  }
  mag(content) {
    console.log('');
    console.log('\x1b[35m', content)
    console.log('\x1b[37m', '');

  }
  cya(content) {
    console.log('');
    console.log('\x1b[36m', content)
    console.log('\x1b[37m', '');
  }
  whi(content) {
    console.log('');
    console.log('\x1b[37m', content)
    console.log('');
  }
  methods() {
    // for (let func in log){
    // 	console.log(func)
    // };

    // console.log(Object.keys(cl))

  }
  dir(content) {
    console.dir(content);

  }
  log(content) {
    console.log(content)
  }
}

const cl = new colorLog();

module.exports = cl;
