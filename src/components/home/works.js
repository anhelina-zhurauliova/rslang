/* eslint-disable max-len */
import speakIt from '../../assets/backgrounds/speakit.jpg';
import basicGame from '../../assets/baseGame.png';
import Audiocall from '../../assets/audiocall-background.jpeg';
import Savannah from '../../assets/savannah.jpg';
import Sprint from '../../assets/sprint.jpeg';
import EnglishPuzzle from '../../assets/englishpuzzle.jpeg';

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
    title: 'Сhaos',
    screenshot: EnglishPuzzle,
    description:
      'Остановите хаос путем верного составления предложений! В данной мини-игре вы не только сможете закрепить, как правильно строить предложения, но и познакомитесь с шедеврами классиков изобразительного искусства ',
    link: '/games/englishpuzzle',
  },
  {
    id: 'g-4',
    title: 'Rocket resque',
    screenshot: Savannah,
    description:
      'Наберите как можно больше правильных ответов, чтобы собрать необходимое количество топлива для спасения ракеты! ',
    link: '/games/savannah',
  },
  {
    id: 'g-5',
    title: 'Audiocall',
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
      'Развейте настоящую космическую скорость в данной игре, чем больше верных ответов, тем выше ваш результат.',
    link: '/games/sprint',
  },
];
