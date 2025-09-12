let score = JSON.parse(localStorage.getItem('score',)) || {
    wins: 0,
    losses: 0,
};
updateScoreElement();

function gamePlay(guess) {
    const randomNumber = Math.random();

    const result = randomNumber < 0.5 ? 'HEADS' : 'TAILS';

    let announce = (guess === result ? 'WIN!': 'LOSE!');

    if(guess === result)
    {
        score.wins +=1 ;
        document.querySelector('.js-announce').style.color = 'green';
    }
    else 
    {
        score.losses +=1 ;
        document.querySelector('.js-announce').style.color = 'red';
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-announce')
        .innerHTML = `${announce}`;

    document.querySelector('.js-choice')
        .innerHTML=`You: ${guess} |&nbsp;| ${result} :Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML= `Wins: ${score.wins} Losses: ${score.losses}`;
}