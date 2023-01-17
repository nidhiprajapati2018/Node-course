
 const chalk = require('chalk');
 const getNotes = require('./notes.js')

// const fs = require('fs')
// fs.writeFileSync('note.txt','My name is Nidhiprajapati')
//  fs.appendFileSync('note.txt', '  I am live in Phoenix')

//const add  = require('./utils.js')
//const getNotes = require('./notes')
// const sum = add(2,4)
// console.log(sum)
// const msg = getNotes();
// console.log(msg)

 //const validator = require('validator');
// console.log(validator.isEmail('nidhi.p@gmail.com'))
//console.log(validator.isURL('https://mead.io'))
 
//  const greenmsg = chalk.bold.yellow.inverse("ERROR");
//  console.log(greenmsg);
// console.log(process.argv[2])

const command = process.argv[2]

if(command === 'add'){
console.log("adding note")
}else if(command === 'remove'){
    console.log('removing note!')
}

 if(command === 'add'){
     console.log("adding note")
 }else if(command === 'remove'){
     console.log('removing note!')
 }
