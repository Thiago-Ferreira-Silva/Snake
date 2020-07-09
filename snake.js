window.onload = function () {
    let gameArea = document.getElementById('gameArea')
    let ctx = gameArea.getContext('2d')
    document.addEventListener('keydown', keyPush)

    const speed = 10
    speedX = speedY = 0
    let playerX = 400
    let playerY = 200
    let tail = 5
    const trail = []
    let appleX = Math.floor(Math.random() * 780) + 10
    let appleY = Math.floor(Math.random() * 580) + 10

    function inGame() {
        playerX += speedX
        playerY += speedY

        if (playerX < 0 || playerX > 800 || playerY < 0 || playerY > 600) {
            gameOver()
        }
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, gameArea.width, gameArea.height)

        ctx.fillStyle = 'red'
        ctx.fillRect(appleX, appleY, 10, 10)

        ctx.fillStyle = 'green'
        for (i in trail) {
            ctx.fillRect(trail[i].x, trail[i].y, 10, 10)

            if (trail[i].x == playerX && trail[i].y == playerY) {
                gameOver()
            }
        }

        trail.push({ x: playerX, y: playerY })

        while (trail.length > tail) {
            trail.shift()
        }

        if ((playerX - appleX) <= 10 && (playerX - appleX) >= -10 && (playerY - appleY) <= 10 && (playerY - appleY) >= -10) {
            appleX = Math.floor(Math.random() * 780) + 10
            appleY = Math.floor(Math.random() * 580) + 10
            tail++
        }
    }

    setInterval(inGame, 1000 / 15)

    function keyPush(event) {
        switch (event.keyCode) {
            case 37:
            case 65:
                speedX = -speed
                speedY = 0
                break
            case 38:
            case 87:
                speedX = 0
                speedY = -speed
                break
            case 39:
            case 68:
                speedX = speed
                speedY = 0
                break
            case 40:
            case 83:
                speedX = 0
                speedY = speed
                break
            default:
                break
        }
    }

    function gameOver() {
        speedX = speedY = 0
        tail = 5
    }
}