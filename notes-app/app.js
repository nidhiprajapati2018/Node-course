const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customize yargs version
//yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add anew note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        console.log('Adding a new notes!')
    }
})

//crate remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler:function() {
        console.log('Removing the note!')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your node',
    handler:function() {
        console.log('\Listing out all notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the node',
    handler:function() {
        console.log('Reading a node')
    }
})

console.log(yargs.argv)  //for using this: node app.js add --title="things to buy"  and output is:{ _: [ 'add' ], title: 'things to buy', '$0': 'app.js' }











