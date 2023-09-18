const readline = require('readline');
const fs = require('fs');
const chalk = require('chalk'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const logStream = fs.createWriteStream('log.txt', { flags: 'a' });

var trojanTxt = chalk.hex('#ff1313ff').bold(`╔══╗╔═╗╔═╗─╔╗╔══╗╔═╦╗  ╔╗╔╗╔══╗╔═╗╔══╗
╚╗╔╝║╬║║║║─║║║╔╗║║║║║  ║╚╝║║╔╗║║╬║╚╗╗║
─║║─║╗╣║║║╔╣║║╠╣║║║║║  ║╔╗║║╠╣║║╗╣╔╩╝║
─╚╝─╚╩╝╚═╝╚═╝╚╝╚╝╚╩═╝  ╚╝╚╝╚╝╚╝╚╩╝╚══╝
─────────────────────  ───────────────\n`)
+ chalk.hex('#d0ff03ff').bold(`By : Nama lu disini`)

  rl.question(trojanTxt + chalk.hex('#73f5ffff').bold('\n\n> Masukkan nomer target : '), (input) => {
  logStream.write(`Input: ${input}\n`);

  logStream.end();

  var a = 0
  setInterval(() => {  
    console.log((chalk.hex('#00e101ff').bold("[ ") + chalk.hex('#d9e900ff').bold(a) + chalk.hex('#00e101ff').bold(" ] ")+ chalk.hex('#00e101ff').bold("SUKSES MENGIRIM TROJAN KE " + input)));;
    a++
  }, 500);
});
