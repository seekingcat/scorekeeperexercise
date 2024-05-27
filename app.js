// select elements
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const limit = document.querySelector('#limit');
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const reset = document.querySelector('#reset');

//connect buttons

let count1 = 0;
let count2 = 0;
const disabled = function() {
    playerOne.setAttribute('disabled', '');
    playerTwo.setAttribute('disabled', '')
}

playerOne.addEventListener('click', function() {
    count1++;
    p1Score.innerText = count1;
    if (count1 === parseInt(limit.value)) {
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
        disabled()
    }
})

playerTwo.addEventListener('click', function() {
    count2++;
    p2Score.innerText = count2;
    if (count2 === parseInt(limit.value)) {
        p2Score.classList.add('has-text-success');
        p1Score.classList.add('has-text-danger');
        disabled();
    }
})

limit.addEventListener('change', wholeReset)

reset.addEventListener('click', () => {
    wholeReset();
    limit.value = '';
})

function wholeReset() {
    count1 = 0;
    count2 = 0;
    p1Score.innerText = '0';
    p2Score.innerText = '0'
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    playerOne.removeAttribute('disabled', '');
    playerTwo.removeAttribute('disabled', '')
}