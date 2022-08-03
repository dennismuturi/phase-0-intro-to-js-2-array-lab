// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyofCats = [...cats,name];
    return copyofCats;
}

function prependCat(name){
    const copyofCats = [name,...cats];
    return copyofCats;
}

function removeLastCat(){
     return cats.slice(0,-1);
}

function removeFirstCat(){
    return cats.slice(1);
}


