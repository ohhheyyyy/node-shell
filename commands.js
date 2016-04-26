var fs = require('fs');

module.exports = {
    pwd: function() {
        process.stdout.write(`Current Working directory: ${process.cwd()}`); // ES6 template literal syntax issue?
        process.stdout.write("\nprompt > ");
    },
    date: function() {
        process.stdout.write(`Current date: ${new Date()}`); // How do backticks work with all this??
        process.stdout.write("\nprompt > ");
    },
    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },
    echo: function(arr) {
        var string = "";
        for (var i in arr) {
            string += arr[i] + " ";
        }
        process.stdout.write(string); // How do backticks work with all this??
        process.stdout.write("\nprompt > ");
    },

    cat: function(arr){ // need to do extra credit (handle spaces in filename)
    // read entire file
    // var fileName = "";
    // for(var i =0; i<arr.length-1; i++){
    //   fileName+=arr[i]+" ";
    // }
    // fileName+=arr[arr.length]
    // console.log(arr)
    fs.readFile(arr[0], function(err,data){
      if(err){
        process.stdout.write("This doesn't exist. What are you doing? \nprompt >"); // how does prompt> tell us we can input a new command
      }
      else{
        process.stdout.write(data.toString());
        process.stdout.write("\nprompt > ");
      }
    });
  },

  head: function(arr){
    // read first 5 lines
    fs.readFile(arr[0], function(err,data){
      if(err){
        process.stdout.write("This doesn't exist. What are you doing? \nprompt >"); // how does prompt> tell us we can input a new command
      }
      else{
        data = data.toString('utf8').split("\n");
        for(var i =0; i< 5; i++){
          process.stdout.write(data[i]+"\n");
        }
        process.stdout.write("\nprompt > ");
      }
    });
  },

  tail: function(arr){ // Do extra credit
    // read last 5 lines
    fs.readFile(arr[0], function(err,data){
      if(err){
        process.stdout.write("This doesn't exist. What are you doing? \nprompt >"); // how does prompt> tell us we can input a new command
      }
      else{
        data = data.toString('utf8').split("\n").slice(-5);
        for(var i =0; i<data.length; i++){
          process.stdout.write(data[i]+"\n");
        }
        process.stdout.write("\nprompt > ");
      }
    });
  },

    sort: function(arr){ // Why so spacey, especially numbers only text?
    fs.readFile(arr[0], function(err,data){
      if(err){
        process.stdout.write("This doesn't exist. What are you doing? \nprompt >"); // how does prompt> tell us we can input a new command
      }
      else{
        data = data.toString('utf8').split("\n").sort();
        for(var i =0; i<data.length; i++){
          process.stdout.write(data[i]+"\n");
        }
        process.stdout.write("\nprompt > ");
      }
    });
  },

  wc: function(arr){
    fs.readFile(arr[0], function(err,data){
      if(err){
        process.stdout.write("This doesn't exist. What are you doing? \nprompt >"); // how does prompt> tell us we can input a new command
      }
      else{
        data = data.toString('utf8').split("\n");
        process.stdout.write(String(data.length));
        process.stdout.write("\nprompt > ");
      }
    });
  },

  unique: function(arr){
     fs.readFile(arr[0], function(err,data){
      if(err){
        process.stdout.write("This doesn't exist. What are you doing? \nprompt >"); // how does prompt> tell us we can input a new command
      }
      else{
        data = data.toString('utf8').split("\n");
        for(var i =0; i<data.length; i++){
          if(data[i] === data[i - 1]){
            data.splice(data[i], 1);
          }
        }
        for(var j=0; j<data.length; j++){
          process.stdout.write(data[j]+"\n");
        }
        process.stdout.write("\nprompt > ");
      }
    });
  },

  curl: function(){},

};
