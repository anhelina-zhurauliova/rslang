import Word from './word';

const requestUrl = 'https://afternoon-falls-25894.herokuapp.com/';

export default async function getVocabulary() {
  const wordsUrl = `${requestUrl}words`;
  const result = [];
  try {
    const res = await fetch(wordsUrl);
    if (!res.ok) {
      res.text().then((text) => {
        throw Error(text);
      });
    }
    const data = await res.json();
    data.forEach((wordObj) => {
      const word = new Word();
      word.setWordFromObject(wordObj);
      result.push(word);
    });
    return result;
  } catch (error) {
    // ToDo: handle errors
    return null;
  }
}
