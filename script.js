const words = ['murmuring', 'bumblebee', 'asphode', 'demure', 'sempiternal', 'incomprehensibilities', 'complexion'];
const word = document.querySelector('.word');


function textSpan(arr) {
    word.innerHTML = "";
    const randomWord = words[Math.floor(Math.random() * words.length)];
    splitWord(randomWord);

}

function splitWord(item) {
    const oneLetter = item.split("");

    oneLetter.forEach((elem) => {
        const newSpan = document.createElement('span');
        newSpan.textContent = `${elem}`;
        word.append(newSpan);
    })
}

textSpan(words);

let minutes = 0;
let seconds = 0;
let timerId = setInterval(() => {
    seconds++;

    if (seconds > 59) {
        seconds = 0;
        minutes++;

    }
    let minute = minutes < 10 ? '0' + minutes : minutes;
    let second = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById("timer").innerHTML = minute + ':' + second;
}, 1000)





let i = 1;
const correctCount = document.querySelector('.correct-count');
const wrongCount = document.querySelector('.wrong-count');
const wordMistakes = document.querySelector('.word-mistakes');
const trueWord = [];
const mistakes = [];
const count = [];

function colorWord() {
    const spans = word.querySelectorAll('span');
    let index = 0;

    document.addEventListener('keydown', (event) => {

        if (event.key === spans[index].textContent) {
            spans[index].classList.remove('w');
            spans[index].classList.add('c');
            trueWord.push(spans[index]);
            index++;
            if (trueWord.length === spans.length) {
                correctCount.textContent = ++correctCount.textContent;
                wordMistakes.textContent = '0';
                trueWord.length = 0;
                mistakes.length = 0;
                count.push(1);

                if (count.length === 5) {
                    alert(`Победа! Ваще время 0${minutes} : ${seconds}`)
                }
                textSpan(words);
                return colorWord();
            }

        } else {
            spans[index].classList.add('w');
            wordMistakes.textContent = ++wordMistakes.textContent;
            mistakes.push(spans[index]);

        };

        console.log(index)
    });
    if (events > spans.light) {
        wrongCount.textContent = ++wrongCount.textContent;
    }
}
colorWord();

console.log(events)
console.log(trueWord);