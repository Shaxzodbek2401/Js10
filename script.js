while (isNaN(kolichestvo)) {
    var kolichestvo = +prompt('Введите количество примеров');
}

while (isNaN(user_max)) {
    var user_max = +prompt('Введите максимальное число:')
}

var num1 = Math.floor(Math.random() * (user_max + 1 - 0) + 0);
var num2 = Math.floor(Math.random() * (user_max + 1 - 0) + 0);



function primer(numb1,numb2) {


    var symbol = Math.floor(Math.random() * (4 + 1 - 1) + 1);

    var example = 0
    

    if (symbol === 1) {
        symbol = '/'
        example = numb1 / numb2
    }
    else if (symbol === 2) {
        symbol = '*'
        example = numb1 * numb2
    }
    else if (symbol === 3) {
        symbol = '-'
        example = numb1 - numb2
    }
    else{
        symbol = '+'
        example = numb1 + numb2
    }

    example == 'infinity' ? example === 0 : ' ';
    while (isNaN(user_answer)) {
        var user_answer = +prompt(numb1 + ' ' + symbol + ' ' + numb2 + ' = ');
    }
    

    let my_answer = user_answer == example ? alert('Ваш ответ верный - ' + example) : alert('Ваш ответ не верный - ' + user_answer + '   Правильный ответ - ' + example);
    return my_answer;
  }


  for (let index = 0; index < kolichestvo; index++) {
      alert(primer(num1, num2));
  }