function sentencesManipulation(sentences){
  var a = sentences.split(' ')
  var hasil =[]
  for (var i = 0; i < a.length; i++) {
    var vokal = ["a", "i", "u","e","o"];
    var x ;
    if (vokal.includes(a[i][0])) {
    hasil.push(a[i]);
    } else {
      x = a[i].slice(1,a[i].length).concat(a[i][0],'nyo')
      hasil.push(x);
    }
  }
return hasil.join(' ')
}


function konversi() {
    rl.on('line', (input) => {
        if (input !== "Good bye!") {
            console.log("hasil konversi: " + sentencesManipulation(input));
            rl.prompt();
        } else {
            rl.close()
        }
    });
}

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu di sini > '
});
rl.prompt();
konversi();
