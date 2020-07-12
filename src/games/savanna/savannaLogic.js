const button = document.querySelector('.start');
const startInformation = document.querySelector('.info');
const game = document.querySelector('.game');
const volumeButton = document.querySelector('.music-icon');
console.log('1');
button.addEventListener('click', () => {
  startInformation.classList.add('hidden');
  game.classList.remove('hidden');
});

volumeButton.addEventListener('click', () => {
  volumeButton.classList.toggle('mute');
});
const fetchWords = async (page, group, wordsAmount) => {
  const rawResponse = await fetch(
    `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}&wordsPerPage=${wordsAmount}`,
  );
  const content = await rawResponse.json();
  return content;
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function randomIndex(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
function correctAnswerAudio() {
  const correctAnswer = new Audio();
  correctAnswer.src = 'audio/correct.mp3';
  correctAnswer.play();
}
function mistakeAnswerAudio() {
  const mistakeAnswer = new Audio();
  mistakeAnswer.src = 'audio/error.mp3';
  mistakeAnswer.play();
}

const getWords = async () => {
  const englishWord = document.querySelector('.box');
  const answers = document.querySelectorAll('.options');
  //   const answersContainer = document.querySelectorAll('.various');
  const wordsNew = await fetchWords(0, 0, 60);

  let mass;
  const result = [];

  shuffle(wordsNew);

  for (let i = 0; i < 4; i++) {
    mass = wordsNew.pop();
    result.push(mass);
  }
  // console.log(result);

  shuffle(result);

  const correctIndex = randomIndex(0, 3);
  englishWord.innerHTML = result[correctIndex].word;
  // console.log(correctIndex);

  answers.forEach((elem, index) => {
    elem.innerHTML = result[index].wordTranslate;
    elem.addEventListener('click', () => {
      //   console.log(elem.dataset.keycode);
      //   document.addEventListener('keydown', function(e) {
      //     if(e.keyCode === elem.dataset.keycode) {
      //       console.log('вариант 1')
      //     }
      // });

      if (index === correctIndex) {
        const demoCalc = window
          .getComputedStyle(document.body)
          .getPropertyValue('background-position-y');
        document.body.style.backgroundPositionY = `${parseFloat(demoCalc) - 3}'%'`;
        elem.parentNode.classList.add('correct-answer');
        elem.classList.add('correct-answer');
        if (!volumeButton.classList.contains('mute')) {
          correctAnswerAudio();
        }
      } else {
        elem.classList.add('mistake-answer');
        elem.parentNode.classList.add('mistake-answer');
        // console.log(correctIndex);
        answers[correctIndex].classList.add('correct-answer');
        answers[correctIndex].parentNode.classList.add('correct-answer');
        if (!volumeButton.classList.contains('mute')) {
          mistakeAnswerAudio();
        }
      }
    });
  });
};

getWords();
