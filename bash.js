// Process
// console.log(process);
// console.log(Object.keys(process));

var commands = require('./commands');

  // Output a prompt
  process.stdout.write('prompt > ');

  // The stdin 'data' event fires after a user types in a line
  process.stdin.on('data', function (data) {
    var userCommand = data.toString().trim().split(" "); // remove the newline

    if(userCommand.length===1){
      commands[userCommand[0]]();
    }
    else{
      var arrToPass = userCommand.slice(1);
      commands[userCommand[0]](arrToPass);
    }
  });

// console.log(process.argv);
 // if (userCommand === "pwd") {
    //   commands[userCommand]();
    //     //process.stdout.write(`Current Working directory: ${process.cwd()}`); // ES6 template literal syntax issue?
    // }
    // if (userCommand === "date") {
    //   commands[userCommand]();
    //     //process.stdout.write(`Current date: ${new Date()}`); // How do backticks work with all this??
    // }

    // if (userCommand === "ls") {
    //   commands[userCommand]();
        //process.stdout.write(`Current date: ${new Date()}`); // How do backticks work with all this??
    