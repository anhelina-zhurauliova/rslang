export default class Word {
  constructor(
    id,
    group,
    page,
    word,
    image,
    audio,
    audioMeaning,
    audioExample,
    textMeaning,
    textExample,
    transcription,
    textExampleTranslate,
    textMeaningTranslate,
    wordTranslate,
    wordsPerExampleSentence,
  ) {
    this.id = id;
    this.group = group;
    this.page = page;
    this.word = word;
    this.image = image;
    this.audio = audio;
    this.audioMeaning = audioMeaning;
    this.audioExample = audioExample;
    this.textMeaning = textMeaning;
    this.textExample = textExample;
    this.transcription = transcription;
    this.textExampleTranslate = textExampleTranslate;
    this.textMeaningTranslate = textMeaningTranslate;
    this.wordTranslate = wordTranslate;
    this.wordsPerExampleSentence = wordsPerExampleSentence;
  }

  setWordFromObject(obj) {
    this.id = obj.id;
    this.group = obj.group;
    this.page = obj.page;
    this.word = obj.word;
    this.image = obj.image;
    this.audio = obj.audio;
    this.audioMeaning = obj.audioMeaning;
    this.audioExample = obj.audioExample;
    this.textMeaning = obj.textMeaning;
    this.textExample = obj.textExample;
    this.transcription = obj.transcription;
    this.textExampleTranslate = obj.textExampleTranslate;
    this.textMeaningTranslate = obj.textMeaningTranslate;
    this.wordTranslate = obj.wordTranslate;
    this.wordsPerExampleSentence = obj.wordsPerExampleSentence;
  }
}
