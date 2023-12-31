


let nouns = ["heart","ocean","beach"];
let verbs = ["look","make","continue"];
let adjective = ["good","different","possible"];

let noun = nouns[Math.floor(Math.random() * nouns.length)]
let verb = verbs[Math.floor(Math.random() * verbs.length)]
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]


let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`

console.log(sentence)




/*

    ----------------------------------------
    PART 1
    ----------------------------------------
    1. Create three variables called noun verb and adjective and store one of each type.
    2. Choose a short one sentence poem that includes the following variables:
         —  Sample sentence: `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    3. Create five different versions of this sentence with different variables.
    4. Write it to the browser window using document.write()

    ----------------------------------------
    PART 2
    ----------------------------------------
    1. Make Make a list of at least five words for each variable:
        — Sample array: let nouns = [ ‘heart’, ‘rainbow’, ‘ocean’];.
    2. Create a randomly generated sentence by using the variables.
        — Sample sentence: `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    3. Write it to the browser window using document.write()

    Hint: Formula for selecting a random element from an array
    Article: https://css-tricks.com/snippets/javascript/select-random-item-array/
    let item = arrayName[Math.floor(Math.random()*arrayName.length)];

    let nouns = ["heart", "rainbow", "ocean"];
    let verbs = ["look", "make", "continue"];
    let adjectives = ["good", "different", "possible"];

*/

