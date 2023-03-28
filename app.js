let shot = document.querySelector('.shot');

let hit = document.querySelector('.hit');

let count = document.querySelector('.count .number');

let counter = 0;

document.body.addEventListener('click', playShot);

function playShot(e) {
    let elem = e.target;

    if (elem.classList.contains('beer')) {
        hit.stop();
        hit.play();
        counter++;
        count.textContent = counter;
        elem.classList.add('die')

        if (counter == 6) {
            setTimeout(replay, 1300)
        }
    }
    else {
        shot.stop();
        shot.play()
    }
}

function replay() {
    let died = document.querySelectorAll('.beer')
    died.forEach(function (item) {
        item.classList.remove('die');
    })
    counter = 0;
    count.textContent = counter;
}

HTMLAudioElement.prototype.stop = function () {
    this.pause();
    this.currentTime = 0.1;
}