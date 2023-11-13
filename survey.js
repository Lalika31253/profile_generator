const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('What is your name/nickname? ', (answer) => {
  answers.push(`${answer}`);
  rl.question('What is your hobbie? ', (answer) => {
    answers.push(`${answer}`);
    rl.question('What kinda music do you like? ', (answer) => {
      answers.push(`${answer}`);
      rl.question('Who is your favorite artist/band? ', (answer) => {
        answers.push(`${answer}`);
        rl.question('What song do you currently play on repeat? ', (answer) => {
          answers.push(`${answer}`);
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
            answers.push(`${answer}`);
            console.log(`Here is a brief summary from a user ${answers[0]}. His/her hobbie is ${answers[1]}. Favorite kind of music is: ${answers[2]}. Favorite artist/band is: ${answers[3]}. ${answers[4]} - song, that currently plays on repeat. ${answers[0]} is amazing at ${answers[5]}.`);
            rl.close();
          })
        })
      })
    })
  });

});