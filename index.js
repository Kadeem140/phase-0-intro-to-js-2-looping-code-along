// Code your solutions in this file
//for ([initialization]; [condition]; [iteration]) {
//    [loop body]
//  }


// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

const array1 = ["Kadeem", "Roshawn", "Mom"];


function writeCards(array){
    let messages = [];
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return messages
}

writeCards(array1)

let i = 10
function countDown(i){
    while( i >= 0){
        console.log(i--)
    }
}

countDown(i)

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);