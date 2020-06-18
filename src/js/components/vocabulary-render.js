const vocabulary = document.getElementById('vocabulary');
const vocabularyItem = document.getElementById('vocabulary-item');

export default function renderVocabulary(words) {
  // eslint-disable-next-line no-unused-vars
  words.forEach((word) => {
    const copyOfItem = vocabularyItem.cloneNode(true);
    vocabulary.appendChild(copyOfItem);
  });
  vocabularyItem.parentNode.removeChild(vocabularyItem);
  // todo: render words taken from API
}
