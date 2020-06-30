
//Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone

// TIP: console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.


const sentence = "hello there from lighthouse labs";

let delay = 0;
let delayLine = sentence.length * 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay)
  delay += 50
}
setTimeout(() => {
  process.stdout.write('\n')
}, delayLine);
