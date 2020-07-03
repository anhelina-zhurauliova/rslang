import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { CardList } from './CardList';
import 'swiper/swiper.scss';

const SimpleSwiperWithParams = ({ words }) => {
  // eslint-disable-next-line no-unused-vars
  const params = {
    slidesPerView: 1,
    rebuildOnUpdate: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Swiper {...params}>
      <CardList words={words} />
    </Swiper>
  );
};
SimpleSwiperWithParams.propTypes = {
  words: PropTypes.array,
  updateSwiper: PropTypes.func,
};

export default SimpleSwiperWithParams;
