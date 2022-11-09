const answer = prompt('Привет, сыграть хоч ?')
if (answer === 'да'){
    var name = prompt('Как вас зовут')
}

let MyCount = 0
let computerCount = 0
const choice = ['камень','ножницы','бумага'];


for (;answer === 'да';) {
    let random = Math.floor(Math.random() * choice.length);
    console.log(choice[random]);

    let computer = choice[random];
    let MyChoice = prompt( `${name} выбери: камень ножницы или бумага`)
    console.log(MyChoice)



    if (MyChoice == null) break;
    if (MyChoice === 'стоп')break;


    else if (computer === 'камень' && MyChoice === 'ножницы') {
        ++computerCount;
        alert(`Компьютер Победил счет игры ${MyCount} : ${computerCount}`);
    }
    else if (computer === 'ножницы' && MyChoice === 'бумага') {
        ++computerCount;
        alert(`Компьютер Победил счет игры ${MyCount} : ${computerCount}`);
    }
    else if (computer === 'бумага' && MyChoice === 'камень') {
        ++computerCount;
        alert(`Компьютер Победил счет игры ${MyCount} : ${computerCount}`);
    }
    else if (computer === MyChoice) {
        alert(`ничья счет игры ${MyCount} : ${computerCount}`);
    }
    else {
        ++MyCount;
        alert(`${name} ты победил счет игры ${MyCount} : ${computerCount}`);
    }


    if (MyCount === 10){
        alert(`Конец игры счет ${MyCount} : ${computerCount} ${name} Победил!`)
        break
    }
    if (computerCount === 10){
        alert(`Конец игры счет ${MyCount} : ${computerCount} Компьютер Победил!`)
        break
    }
}
alert('Как хоч :(')
