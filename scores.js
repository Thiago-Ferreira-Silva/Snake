function setScore() {
    const name = document.getElementById('name').value
    let scores = JSON.parse(localStorage.getItem('__snake_gameScore'))
    if (!scores) scores = []
    
    scores.push({ name, score})
    scores.sort((a, b) => b.score - a.score)
    scores = scores.slice(0, 10)
    
    localStorage.setItem('__snake_gameScore', JSON.stringify(scores))

    window.location.replace('./scoreboard.html')
}

function getScores() {
    const scores = JSON.parse(localStorage.getItem('__snake_gameScore'))
    if (!scores) scores = []

    scores.forEach(score => createHtml(score))
}

function createHtml(score) {
    const scoreList = document.getElementById('scoreList')
    const scoreHtml = document.createElement('div')
    
    scoreHtml.setAttribute('class', 'score')
    scoreHtml.innerHTML = `
        <div class="score-name">${score.name}</div>
        <div class="score-number">${score.score}</div>                 
    `

    scoreList.appendChild(scoreHtml)
}
