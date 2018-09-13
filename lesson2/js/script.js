let yourColor;
let yourMem;
let arrColor = [];
let arrMem = [];
let objYourChoice = {};
let currentPrice = 0;
let escape = '';

arrColor = [
  {
    color: "black",
    price: 100
  },
  {
    color: "red",
    price: 120
  },
  {
    color: "silver",
    price: 110
  }
];

arrMem = [
  {
    memory: 64,
    price: 20
  },
  {
    memory: 128,
    price: 40
  },
  {
    memory: 256,
    price: 80
  }
];

// Далі йде провірка чи є колір чи память в наяваності, але такий код не
// підходить так як потрібно багато міняти коду якщо добавиться щось інше,
// альтернатива вирішення далі по коду
// yourColor = prompt('Enter color of your phone', 'red/silver/black');
// while (yourColor !== 'black' && yourColor !== 'silver' && yourColor !== 'red' ) {
//   if (yourColor === null) break;
//   yourColor = prompt('Enter color again', 'red/silver/black');
// }

//yourMem = prompt('Emter value of memory', '64/128/256');
// while (+yourMem !== 64 && +yourMem !== 128 && +yourMem !== 256) {
//   if (yourColor === null) break;
//   yourMem = prompt('Enter memory again', '64/128/256');
// }

yourColor = prompt('Enter color of your phone', 'red/silver/black');
while (escape !== yourColor) {
  if (yourColor === null) break;
  for (let value of arrColor) {
    if (value.color === yourColor) {
      escape = value.color;
      break;
    }
  }
  if (escape !== yourColor) {
    yourColor = prompt('Enter color again', 'red/silver/black');
  } else break;
}

yourMem = prompt('Emter value of memory', '64/128/256');
while (escape !== +yourMem) {
  if (yourMem === null) break;
  for (let j of arrMem) {
    if (j.memory === +yourMem) {
      escape = j.memory;
      break;
    }
  }
  if (escape !== +yourMem) {
    yourMem = prompt('Enter memory again', '64/128/256');
  } else break;
}

//При добавленні нового кольору чи памяті в масив умову не потрібно змінювати.


objYourChoice = {
  color: yourColor,
  memory: +yourMem
};

// Одним циклом можна зробити якщо масиви з кольором і ціною однакові
// for (var i = 0; i < 3; i++) {
//   if(arrColor[i].color === objYourChoice.color) {
//     currentPrice += arrColor[i].price;
//   }
//   console.log(currentPrice);
//   if(arrMem[i].memory === objYourChoice.memory) {
//     currentPrice += arrMem[i].price;
//   }
// }

for (let val of arrColor) {
  if (val.color === objYourChoice.color) {
    currentPrice += val.price;
  }
}

for (let v of arrMem) {
  if(v.memory === objYourChoice.memory) {
    currentPrice += v.price;
  }
}

if (yourColor === null || yourMem === null) {
  document.write('<h1>Something happend wrong<\h1>')
  document.write('<img width="200" src="img/default.png">');
} else {
  document.write('<img width="200" src="img/' + yourColor + '.png">');
  document.write('<h1>Your phone cost ' + currentPrice + '$<\h1>');
}






