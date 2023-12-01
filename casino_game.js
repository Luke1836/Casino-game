
const result = document.getElementById("result");
const card = document.getElementById("operators"); 
const sumElement = document.getElementById("sum");
var firstCard;
var secondCard, sum, choice;
const b1 = document.querySelector('.btn-1');
const rules = document.querySelector('.rules');
const

b1.addEventListener('click', ()=> {

});

function newTake()
{
    firstCard = Number(prompt("Enter a number between 1-10 (1 - Ace)"));
    secondCard = Number(prompt("Enter a number between 1-10(1 - Ace)"));
    if(firstCard > 10 || secondCard > 10)
    {
        card.textContent = "Cards are not valid.";
        alert("Card drawn is not a valid one. Therefore you are disqualified!");
        exit(0);
    }
    if(firstCard === 1)
        firstCard = 11;
    if(secondCard === 1)
        secondCard = 11;
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
        choice = prompt("Do you want to draw a new pair of cards? (Y/N)");
        if(choice.toUpperCase() == 'Y')
            newTake();
        else
            result.textContent = "Sorry but you lose. Thank you for playing!";

    }
    else if(sum == 21)
    {
        result.textContent = "Congratulations!! You have pulled a Black Jack";
    }
    else
    {
        result.textContent = "Unfortunately, you have lost the game.\nBetter Luck next time";
    }
}

function reset()
{
    result.textContent = "Result: ";
    firstCard = 0;
    secondCard = 0;
    sum = 0;
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