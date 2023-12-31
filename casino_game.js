const btnDiv = document.querySelector('#operands');
const result = document.getElementById("result");
const card = document.getElementById("operators"); 
const sumElement = document.getElementById("sum");
const choiceCard = document.getElementById('choice');
var firstCard;
var secondCard, sum, choice;
const b1 = document.querySelector('.btn-1');
const rules = document.querySelector('.rules');
const sec = document.querySelector('.section1');
const cardBody = document.querySelector('.card');
const choiceNum = document.querySelector('.numbers');
let arr= [];
const close = document.querySelector('.close');
const closeRules = document.querySelector('.close_rules');
const boardBtn = document.getElementById('board-btn');
const board = document.querySelector('.hero-1');
const closeBoard = document.querySelector('.close_board');

//Closing the board after displaying the results
closeBoard.addEventListener('click', () => {
    board.classList.add('inactive');
    b1.classList.remove('inactive');
    sec.classList.add('active');
    btnDiv.classList.remove('inactive');
    result.textContent = "Result:";
    card.textContent = "Numbers: ";
    sumElement.textContent = "Sum: ";
    result.classList.add("inactive");
    sumElement.classList.add("inactive");
    firstCard = secondCard = sum = null;
});

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
    if(firstCard !== null && secondCard !== null && sum !==null)
    {
        firstCard=secondCard=sum=null;
        result.textContent = "Result: ";
        sumElement.textContent = "Sum: ";
        card.textContent = "Numbers: ";

    }

    sec.classList.toggle('active');
    cardBody.classList.toggle('inactive');
    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener('click', ()=> {
        firstCard = parseInt(document.getElementById('number1').value, 10);
        secondCard = parseInt(document.getElementById('number2').value, 10);
        console.log(firstCard + "    " + secondCard);
        arr.push(firstCard);
        arr.push(secondCard);
        console.log(arr[0] + "  " + arr[1]);
        document.getElementById('number1').value = "";
        document.getElementById('number2').value = "";
        sec.classList.toggle('active');
        cardBody.classList.toggle('inactive');

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

        if(sum < 21 && sum > 10)
            {            
                matchPoint();
            }
        else if(sum == 21)
            {
                board.classList.remove('inactive');
                b1.classList.add('inactive');
                btnDiv.classList.add('inactive');
                result.classList.remove("inactive");
                result.textContent = "Congratulations!!! You have pulled a Black Jack";
            }
        else
            {
                result.classList.remove("inactive");
                result.textContent = "Unfortunately, you have lost the game.\nBetter Luck next time";
            }
    });    
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

function matchPoint()
{
    choiceCard.classList.remove('inactive');
    choice = choiceNum.value;
        if(choice.toUpperCase() == 'Y')
            newTake();
        else    
        {
            result.classList.remove('inactive');
            result.textContent = "Unfortunately, you have lost the game\nBetter luck nextTime";
        }
}

/* function randomNumber()
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
} */