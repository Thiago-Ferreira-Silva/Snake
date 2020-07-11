const score = parseInt(sessionStorage.getItem('gameScore'))
sessionStorage.removeItem('gameScore')

const scoreTable = document.getElementById('score')
scoreTable.innerText = `Your score was ${score}`