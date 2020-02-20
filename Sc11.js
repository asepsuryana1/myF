
let fs = require('fs');
let x = fs.readFileSync('fs.json', 'utf8');
let z = JSON.parse(x)
let y = 0

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Tebakan :"
});
console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya ! ')
console.log(`${z[y].Pertanyaan}`);

rl.prompt();
rl.on('line', (line) => {
  if (line == z[y].Tebakan) {
    console.log('Selamat Anda Benar')
    y++
    if (y == z.length) {
      console.log('Hore Anda Menang')
      rl.close()
    } else {
      console.log(`${z[y].Pertanyaan}`);
      rl.prompt()
    }
  } else {
    console.log('wkwkwkwk, Anda kurang beruntung')
    rl.prompt()
  }
})
