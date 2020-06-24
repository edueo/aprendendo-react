// Aqui a uma sobreescrita da váriavel de escopo global topic

var topic = "Javascript";

if (topic) {
    var topic = "React";
    console.log("block", topic); // block React
}

console.log("global", topic); // global React

// Com o uso do let, não sobreescrevemos a variável global.

var topicNew = "Javascript";

if (topicNew) {
    let topicNew = "React";
    console.log("block", topicNew);
}

console.log("global", topicNew);
