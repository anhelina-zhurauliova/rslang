/* eslint-disable max-len */
import speakIt from '../../assets/backgrounds/speakit.jpg';
import basicGame from '../../assets/baseGame.png';
import Audiocall from '../../assets/backgrounds/audiocall.jpeg';
import Savannah from '../../assets/savannah.jpg';
import Sprint from '../../assets/sprint.jpeg';
import Shuttle from '../../assets/shuttle.jpeg';

export const Games = [
  {
    id: 'g-1',
    title: 'Space odyssey',
    screenshot: basicGame,
    description:
      'Вас ожидает настоящая одиссея, с помощью которой вы сможете изучить новые слова при помощи картинок-ассоциаций, а также примеров использования слова (все подсказки регулируются в настройках) ',
    link: '/games/main',
  },
  {
    id: 'g-2',
    title: `Astronaut's speech`,
    screenshot: speakIt,
    description:
      'Бросьте вызов своему произношению в данной мини-игре, научитесь говорить настолько правильно, чтобы вас можно было понять даже из космоса.',
    link: '/games/speakIt',
  },
  {
    id: 'g-3',
    title: 'Shuttle Docking',
    screenshot: Shuttle,
    description:
      'Тренировка Shuttle Docking развивает ассоциативное мышление.Заполни поля под картинками цифрами, наиболее подходящими на твой взгляд.',
    link: '/games/englishpuzzle',
    anotherLink: 'https://rslang-team70-angelina-zhurauliova.netlify.app/',
  },
  {
    id: 'g-4',
    title: 'Rocket resque',
    screenshot: Savannah,
    description:
      'Наберите как можно больше правильных ответов, чтобы собрать необходимое количество топлива и запустить ракету в космос! ',
    link: '/games/savannah',
    anotherLink: 'https://rslang-team70-anhelina-zhurauliowa.netlify.app/',
  },
  {
    id: 'g-5',
    title: 'Space Station',
    screenshot: Audiocall,
    description:
      'Проверьте навыки аудирования, ведь важно не только правильно говорить, но и верно понимать своего собеседника!',
    link: '/games/audiocall',
  },
  {
    id: 'g-6',
    title: 'Cosmic velocity',
    screenshot: Sprint,
    description:
      'Развейте настоящую космическую скорость в данной игре, чем больше верных ответов, тем выше ваш результат!',
    link: '/games/sprint',
  },
];
