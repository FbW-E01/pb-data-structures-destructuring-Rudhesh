const fruit = "banana";

const vegetable = "cucumber";

const food = ["bread", "cakes", "pizza" ]

const [word1, word2, word3] = food;

console.log(word1, word2, word3);


// 2.Object Destructuring

const halloween = {
    smith: "monster",
    adam: "Candy Corn",
    john: "Hot Tamales",
    ron: "Starburst"
};

const {smith, adam, john, ron} = halloween;

console.log(smith, adam, john, ron);

// 3. Parameters: Object Destructuring

const Band = {
    name: "Eminem",
    hit: " The Marshall Mathers LP ",
    nationality : "American",
    genre : "hip hop"
}

function printMusicianData({name, hit, nationality, genre}) {
    console.log(`${name} is a ${nationality} singer/songwriter. The musician sings ${genre} and their greatest hit is ${hit}`)
}
printMusicianData(Band);