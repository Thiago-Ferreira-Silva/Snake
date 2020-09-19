function setScore() {
    const name = document.getElementById('name').value
    console.log('nome')
    let scores = JSON.parse(localStorage.getItem('__snake_gameScore'))
    if (!scores) scores = []
    scores.push({ name, score})
    localStorage.setItem('__snake_gameScore', JSON.stringify(scores))

    window.location.replace('./scoreboard.html')
}

function getScores() {
    console.log('score')
    const scores = JSON.parse(localStorage.getItem('__snake_gameScore'))
    if (!scores) scores = []

    let i = 0
    scores.forEach(score => createHtml(score))
}

function createHtml(score) {
    const scoreList = document.getElementById('scoreList')
    const scoreHtml = document.createElement('${i}').setAttribute('class', 'score')
    i++

    scoreHtml.innerHtml = `
        <div class="score-name">${score.name}</div>
        <div class="score-number">${score.score}</div>                 
    `

    scoreList.appendChild(scoreHtml)
}

//ainda não está pronto