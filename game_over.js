const score = parseInt(sessionStorage.getItem('gameScore'))
sessionStorage.removeItem('gameScore')

const scoreTable = document.getElementById('showScore')
scoreTable.innerText = `Your score was ${score}`

function submit() {
    console.log('submit')
}