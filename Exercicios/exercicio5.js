
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inverteString = (str) => {
    let novaString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
};

rl.question("Digite a string a ser invertida: ", (str) => {
    const strInvertida = inverteString(str);
    console.log(`String invertida: ${strInvertida}`);
    rl.close();
});