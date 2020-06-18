import getVocabulary from './js/components/vocabulary-handler';
import renderVocabulary from './js/components/vocabulary-render';

getVocabulary().then((res) => renderVocabulary(res));
export default 'a';
