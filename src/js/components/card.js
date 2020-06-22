const wordTranslateElem = document.querySelector('#translated-word');
const translatedSentenceElem = document.querySelector('#translated-sentence');
const textExampleElem = document.querySelector('#text-example');
const wordTranscriptionElem = document.querySelector('#transcription');
const imgElem = document.querySelector('#word-img');
const nextBtnElem = document.querySelector('#accept');

async function getWords(page, group) {
  const url = new URL('/words', 'https://afternoon-falls-25894.herokuapp.com');
  url.searchParams.set('page', page);
  url.searchParams.set('group', group);

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.log('Error!');
  }
}

let studiedWord;
let enteredWord;

function renderWordComponents(words, wordNum) {
  textExampleElem.innerHTML = words[wordNum].textExample;
  const unknownWord = document.querySelector('b');
  studiedWord = unknownWord.textContent;
  const wordLength = unknownWord.textContent.length;
  unknownWord.innerHTML = `<input class='input-word'
   type="text" style="width: ${wordLength}rem" autofocus>`;
  enteredWord = document.querySelector('.input-word');
  translatedSentenceElem.textContent = words[wordNum].textExampleTranslate;
  wordTranslateElem.textContent = words[wordNum].wordTranslate;
  wordTranscriptionElem.textContent = words[wordNum].transcription;
  imgElem.src = `https://afternoon-falls-25894.herokuapp.com/${words[wordNum].image}`;
  imgElem.alt = `${words[wordNum].word}`;
}

getWords(1, 2).then((words) => renderWordComponents(words, 13));

nextBtnElem.addEventListener('click', () => {
  if (enteredWord.value === studiedWord) {
    // eslint-disable-next-line no-console
    console.log('Wright!');
  } else {
    // eslint-disable-next-line no-console
    console.log('Wrong!');
  }
});
