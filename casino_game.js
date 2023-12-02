
const result = document.getElementById("result");
const card = document.getElementById("operators"); 
const sumElement = document.getElementById("sum");
var firstCard;
var secondCard, sum, choice;
const b1 = document.querySelector('.btn-1');
const rules = document.querySelector('.rules');
const sec = document.querySelector('.section1');
const cardBody = document.querySelector('.card');
let arr= [];
const close = document.querySelector('.close');
const closeRules = document.querySelector('.close_rules');

closeRules.addEventListener('click', () => {
    rules.classList.add('inactive');
    sec.classList.add('active');
});

close.addEventListener('click', ()=> {
    cardBody.classList.toggle('inactive');
    sec.classList.toggle('active');
});

b1.addEventListener('click', ()=> {
    rules.classList.remove('inactive');
    sec.classList.remove('active');
});

function newTake()
{
    sec.classList.toggle('active');
    cardBody.classList.toggle('inactive');
    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener('click', ()=> {
        console.log("Hello");
        firstCard = document.getElementById('number1').value;
        secondCard = document.getElementById('number2').value;
        console.log(firstCard + "    " + secondCard);
        arr.push(firstCard);
        arr.push(secondCard);
        console.log(arr[0] + "  " + arr[1]);
        document.getElementById('number1').value = "";
        document.getElementById('number2').value = "";
        sec.classList.toggle('active');
        cardBody.classList.toggle('inactive');
        return arr;
    });
    
    firstCard = arr[0];
    secondCard = arr[1];
    console.log(firstCard + "    " + secondCard);
    if(firstCard > 10 || secondCard > 10)
    {
        card.classList.remove('active');
        result.classList.remove('inactive');
        result.textContent += "Cards are not valid";
        exit(0);
    }
    if(firstCard === 1)
        firstCard = 11;
    if(secondCard === 1)
        secondCard = 11;
    sumElement.classList.remove('inactive');
    sum = firstCard + secondCard;
    sumElement.textContent += sum;
    card.textContent = firstCard + "  " + secondCard;
    if(choice.toUpperCase() == 'Y')
        {
            sumElement.textContent = "Sum: " + sum;
            game();
        }
    
}

function game()
{
    if(sum < 21)
    {
        result.textContent += "You are still in the game. Press to continue";
        
        newTake();
    }
    else if(sum == 21)
    {
        result.textContent = "Congratulations!!! You have pulled a Black Jack";
    }
    else
    {
        result.textContent = "Unfortunately, you have lost the game.\nBetter Luck next time";
    }
}

function reset()
{
    result.classList.add('inactive');
    sumElement.classList.add('inactive');
    firstCard = 0;
    secondCard = 0;
    sum = 0;
    result.textContent = "Result: ";
    card.textContent = "Numbers: ";
    sumElement.textContent = "Sum: ";
}


function randomNumber()
{
    firstCard = Math.floor(Math.random() * 10) + 2;
    secondCard = Math.floor(Math.random() * 10) + 2;
    sum = firstCard + secondCard;
    sumElement.textContent ="SUM: " + sum;
    card.textContent = firstCard + "  " + secondCard;

    if(choice.toUpperCase() == 'Y')
        {
            sumElement.textContent = "Sum: " + sum;
            game();
        }
}